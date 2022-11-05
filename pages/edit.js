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

export default function Edit({
  items,
  recipes,
  shoppingItems,
  onDelete,
  onAdd,
}) {
  const [listItems, setListItems] = useState(shoppingItems);

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
            onDelete={onDelete}
            onAdd={onAdd}
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
