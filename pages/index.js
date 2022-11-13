import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ContentWrapper from "../components/ContentWrapper";
import ListContainer from "../components/ListContainer";
import ListEmptyMessage from "../components/ListEmptyMessage";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import ShowCategoriesButton from "../components/buttons/ShowCategoriesButton";
import { getAllShoppingItems } from "../services/shoppingItemService";
import { toggleItemChecked } from "../utils/indexFun";

export async function getServerSideProps() {
  const shoppingItems = await getAllShoppingItems();
  return {
    props: { shoppingItems: shoppingItems },
  };
}

export default function Home({ shoppingItems }) {
  const [listItems, setListItems] = useState(shoppingItems);
  const isEmpty = listItems.length === 0;

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <>
      <Head>
        <title>MyShoppingManager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <VPContainer height={winHeight}> */}
      <Header isOverlappingAnimation={true}>MyShoppingManager</Header>
      <main>
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
      {/* </VPContainer> */}
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
  border-radius: 200rem;
  margin: 0.2rem 0 1rem 0;
`;

const StyledLink = styled.a`
  align-self: flex-start;
  text-decoration: none;
`;

const VPContainer = styled.div`
  height: ${({ height }) => height};
`;
