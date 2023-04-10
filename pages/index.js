import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOutButton from "../components/buttons/SignOutButton";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Background from "../components/Background";
import { ContentWrapper, ButtonWrapper } from "../components/BasicComponents";
import ListContainer from "../components/ListContainer";
import ListEmptyMessage from "../components/ListEmptyMessage";
import { SeparatorLine } from "../components/BasicComponents";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShowCategoriesButton from "../components/buttons/ShowCategoriesButton";
import FinishButton from "../components/buttons/FinishButton";

import { getShoppingItemsByUser } from "../services/shoppingItemService";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (session) {
    const shoppingItems = await getShoppingItemsByUser(session.user.email);
    return {
      props: { shoppingItems: shoppingItems },
    };
  } else return { props: {} };
}

export default function Home({ shoppingItems }) {
  const { data: session } = useSession();
  const [listItems, setListItems] = useState(shoppingItems);

  let isEmpty = null;
  if (session) {
    isEmpty = listItems.length === 0;
  }

  function toggleItemChecked(id) {
    setListItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  async function finishList() {
    const checkedItem_ids = listItems
      .filter((item) => item.checked)
      .map((item) => item.id);

    // 1. delete respective items per ID
    await fetch("api/shoppingItems", {
      method: "DELETE",
      body: JSON.stringify({ type: "refresh", data: checkedItem_ids }),
    });

    // 2. get current list from DB
    const response = await fetch("api/shoppingItems", {
      method: "GET",
    });
    const responseData = await response.json();
    const shoppingItems = responseData.shoppingItems;

    setListItems(shoppingItems);
  }

  //TODO: make list buttons bigger & add more space between them
  //TODO: get rid of component 'IconPlusTextButton' because it's basically just handing down properties to its nested 'StyledTextButton' component
  //TODO: add toast message for Einkauf beendet

  return (
    <>
      <Head>
        <title>MyShoppingManager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header text="MyShoppingManager" isOverlappingAnimation={true}>
        {session && <SignOutButton onSignOut={signOut} />}
      </Header>

      <main>
        <Background opacity="0.7" />
        {session ? (
          <ContentWrapper>
            <>
              <ListContainer>
                {isEmpty ? (
                  <ListEmptyMessage>Leer...</ListEmptyMessage>
                ) : (
                  <>
                    <ShoppingList
                      listItems={listItems.filter(
                        (shoppingItem) => !shoppingItem.checked
                      )}
                      listItemSetter={setListItems}
                      onToggleItemChecked={toggleItemChecked}
                    />
                    <StyledText>Fertig:</StyledText>
                    <SeparatorLine />
                    <ShoppingList
                      listItems={listItems.filter(
                        (shoppingItem) => shoppingItem.checked
                      )}
                      listItemSetter={setListItems}
                      onToggleItemChecked={toggleItemChecked}
                    />
                  </>
                )}
              </ListContainer>
              <ButtonWrapper>
                <Link href={"/categories"} passHref>
                  <StyledLink>
                    <ShowCategoriesButton />
                  </StyledLink>
                </Link>
                <FinishButton onFinish={finishList} />
              </ButtonWrapper>
            </>
          </ContentWrapper>
        ) : (
          <SignIn onSignIn={() => signIn("github")} />
        )}
      </main>
      {session && <NavigationBar />}
    </>
  );
}

const StyledText = styled.span`
  font-family: "Lily Script One";
  color: var(--background-secondary);
  font-size: 1.6rem;
  position: relative;
  left: 1rem;
`;

const StyledLink = styled.a`
  align-self: flex-start;
  text-decoration: none;
`;
