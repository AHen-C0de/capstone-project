import styled from "styled-components";
import { useState, useEffect } from "react";

import Head from "next/head";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import { getAllShoppingItems } from "../services/shoppingItemsService";

export async function getServerSideProps() {
  const shoppingItems = await getAllShoppingItems();
  return {
    props: { shoppingItems: shoppingItems },
  };
}

export default function Home({ shoppingItems }) {
  const [listItems, setListItems] = useState(shoppingItems);

  async function toggleItemChecked(id, checkedStatus) {
    const toggeledCheckStatus = { checked: !checkedStatus };

    const response = await fetch("/api/shoppingItems", {
      method: "PATCH",
      body: JSON.stringify({ id: id, data: toggeledCheckStatus }),
    });
    const fetchedData = await response.json();
    const updatedCheckedStatus = fetchedData.updatedShoppingItem.checked;

    setListItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, checked: updatedCheckedStatus } : item
      )
    );
  }

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
            onToggleItemChecked={toggleItemChecked}
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
