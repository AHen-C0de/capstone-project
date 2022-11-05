import styled from "styled-components";
import { useState } from "react";

import Head from "next/head";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ShoppingListEditor from "../components/ShoppingListEditor/ShoppingListEditor";
import { getAllItems } from "../services/itemService";
import { getAllRecipes } from "../services/recipeService";
import { getAllShoppingItems } from "../services/shoppingItemsService";

export async function getServerSideProps() {
  const items = await getAllItems();
  const recipes = await getAllRecipes();
  const shoppingItems = await getAllShoppingItems();
  return {
    props: { items: items, recipes: recipes, shoppingItems: shoppingItems },
  };
}

export default function Edit({ items, recipes, shoppingItems }) {
  const [listItems, setListItems] = useState(shoppingItems);

  async function addItem(item) {
    const data = { name: item.id, checked: false };
    await fetch("api/shoppingItems", {
      method: "POST",
      body: JSON.stringify(data),
    });
    //fetch all shoppingItems after POST, because returned POST
    //document does only contain name ref, but not its String value
    const response = await fetch("api/shoppingItems", {
      method: "GET",
    });
    const fetchedData = await response.json();
    const shoppingItems = fetchedData.shoppingItems;

    setListItems(shoppingItems);
  }

  async function deleteItem(id) {
    const response = await fetch("/api/shoppingItems", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    });
    const fetchedData = await response.json();

    setListItems((previousItems) =>
      previousItems.filter((item) => item.id !== fetchedData.deletedId)
    );
  }

  return (
    <>
      <Head>
        <title>Liste bearbeiten</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>Liste bearbeiten</Header>
      <main>
        <MainContainer>
          <ShoppingListEditor
            items={items}
            recipes={recipes}
            listItems={listItems}
            onDelete={deleteItem}
            onAdd={addItem}
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
