import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Header from "../../components/Header";
import SignIn from "../../components/SignIn";
import SignOutButton from "../../components/buttons/SignOutButton";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Background from "../../components/Background";
import {
  ContentWrapper,
  ButtonWrapper,
} from "../../components/BasicComponents";
import ListContainer from "../../components/ListContainer";
import ShoppingList from "../../components/ShoppingList/ShoppingList";
import { SeparatorLine } from "../../components/BasicComponents";
import ShowCategoriesButton from "../../components/buttons/ShowCategoriesButton";
import AllItemsButton from "../../components/buttons/AllItemsButton";
import { getShoppingItemsByUser } from "../../services/shoppingItemService";
import { getCategoryByName } from "../../services/categoryService";

export async function getServerSideProps(context) {
  const { name } = context.params;
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (session) {
    const shoppingItems = await getShoppingItemsByUser(session.user.email);
    const category = await getCategoryByName(name);
    return {
      props: {
        id: category.id,
        name: category.name,
        icon_src: category.icon_src,
        shoppingItems: shoppingItems,
      },
    };
  } else return { props: {} };
}

export default function Category({ id, name, icon_src, shoppingItems }) {
  const { data: session } = useSession();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (session) {
      setFilteredItems(filterItems());
    }
  }, [session]);

  function filterItems() {
    return shoppingItems.filter((shoppingItem) => shoppingItem.category === id);
  }

  return (
    <>
      <Head>
        <title>{`Kategorie: ${name}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? (
        <Header text="Kategorien">
          <SignOutButton onSignOut={signOut} />
        </Header>
      ) : (
        <Header text="MyShoppingManager" isOverlappingAnimation={true} />
      )}
      <main>
        <Background opacity="0.7" />
        {session ? (
          <ContentWrapper>
            <ListContainer>
              <CategoryHeader>
                <span>{name}</span>
                <ImageWrapper>
                  <Image
                    src={icon_src}
                    width={30}
                    height={30}
                    alt={"Kategorie Icon"}
                  />
                </ImageWrapper>
              </CategoryHeader>
              <ShoppingList
                listItems={filteredItems.filter(
                  (shoppingItem) => !shoppingItem.checked
                )}
                listItemSetter={setFilteredItems}
                onToggleItemChecked={toggleItemChecked}
              />
              <StyledText>Fertig:</StyledText>
              <SeparatorLine />
              <ShoppingList
                listItems={filteredItems.filter(
                  (shoppingItem) => shoppingItem.checked
                )}
                listItemSetter={setFilteredItems}
                onToggleItemChecked={toggleItemChecked}
              />
            </ListContainer>
            <ButtonWrapper>
              <Link href={"/categories"} passHref>
                <StyledLink>
                  <ShowCategoriesButton />
                </StyledLink>
              </Link>
              <Link href={"/"} passHref>
                <StyledLink>
                  <AllItemsButton />
                </StyledLink>
              </Link>
            </ButtonWrapper>
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

const CategoryHeader = styled.h2`
  display: flex;
  gap: 1rem;
  position: relative;
  left: 1.2rem;
  font-family: "Lily Script One";
  font-weight: 700;
  font-size: 1.8rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ImageWrapper = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
`;
