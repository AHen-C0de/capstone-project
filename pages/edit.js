import styled from "styled-components";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import Head from "next/head";

import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Background from "../components/Background";
import ContentWrapper from "../components/ContentWrapper";
import ShoppingListEditor from "../components/ShoppingListEditor/ShoppingListEditor";
import { getAllItems } from "../services/itemService";
import { getAllRecipes } from "../services/recipeService";
import { getShoppingItemsByUser } from "../services/shoppingItemService";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (session) {
    const items = await getAllItems();
    const recipes = await getAllRecipes();
    const shoppingItems = await getShoppingItemsByUser(session.user.email);
    return {
      props: { items: items, recipes: recipes, shoppingItems: shoppingItems },
    };
  } else return { props: {} };
}

export default function Edit({ items, recipes, shoppingItems }) {
  const { data: session } = useSession();
  const [listItems, setListItems] = useState(shoppingItems);

  console.log(listItems);

  async function addItem(item) {
    const data = {
      item: item.id,
      checked: false,
    };
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
      body: JSON.stringify(id),
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

      {session ? (
        <Header>Liste bearbeiten</Header>
      ) : (
        <Header isOverlappingAnimation={true}>MyShoppingManager</Header>
      )}
      {session ? (
        <>
          <main>
            <Background opacity="0.7" />
            <ContentWrapper>
              <ShoppingListEditor
                items={items}
                recipes={recipes}
                listItems={listItems}
                onDelete={deleteItem}
                onAdd={addItem}
              />
            </ContentWrapper>
          </main>

          <NavigationBar />
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </>
  );
}
