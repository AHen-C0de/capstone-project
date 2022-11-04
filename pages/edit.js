import styled from "styled-components";
import { useState } from "react";

import Head from "next/head";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ShoppingListEditor from "../components/ShoppingListEditor/ShoppingListEditor";
import { getRecipesFromDB } from "../services/db.js";

import { getAllItems } from "../services/itemService";
import { getAllRecipes } from "../services/recipeService";

export async function getServerSideProps() {
  const items = await getAllItems();
  const recipes = await getAllRecipes();
  return {
    props: { items: items, recipes: recipes },
  };
}

export default function Edit({ items, recipes, listItems, onDelete, onAdd }) {
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
