import styled from "styled-components";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Background from "../components/Background";
import ContentWrapper from "../components/ContentWrapper";
import ListContainer from "../components/ListContainer";
import ListEmptyMessage from "../components/ListEmptyMessage";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShowCategoriesButton from "../components/buttons/ShowCategoriesButton";
import { getShoppingItemsByUser } from "../services/shoppingItemService";
import { toggleItemChecked } from "../utils/indexFun";

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
  }
}

export default function Home({ shoppingItems }) {
  const { data: session } = useSession();
  console.log(session);
  const [listItems, setListItems] = useState(shoppingItems);
  const isEmpty = listItems.length === 0;

  if (session) {
    return (
      <>
        <Head>
          <title>MyShoppingManager</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header isOverlappingAnimation={true}>MyShoppingManager</Header>
        <main>
          <Background opacity="0.7" />
          <ContentWrapper>
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
                  <Line></Line>
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
            <Link href={"/categories"} passHref>
              <StyledLink>
                <ShowCategoriesButton />
              </StyledLink>
            </Link>
          </ContentWrapper>
        </main>
        <NavigationBar />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
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

const Line = styled.div`
  width: 70%;
  border: solid 1px var(--background-secondary);
  background-color: var(--background-secondary);
  border-radius: 1rem;
  margin: 0.2rem 0 1rem 0;
`;

const StyledLink = styled.a`
  align-self: flex-start;
  text-decoration: none;
`;
