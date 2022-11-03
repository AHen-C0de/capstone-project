import styled from "styled-components";

import Head from "next/head";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ShoppingList from "../components/ShoppingList/ShoppingList";

export default function Home({ listItems, onToggleItemChecked }) {
  return (
    <>
      <Head>
        <title>MyShoppingManager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>MyShoppingManager</Header>
      <main>
        <MainContainer>
          <ShoppingList
            listItems={listItems}
            onToggleItemChecked={onToggleItemChecked}
          />
        </MainContainer>
      </main>
      <NavigationBar />
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
