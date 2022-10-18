import { nanoid } from "nanoid";

import Head from "next/head";
import ShoppingList from "../components/ShoppingList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyShoppingManager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>MyShoppingManager</h1>
        <ShoppingList items={shoppingListItems} />
      </main>
    </div>
  );
}

const shoppingListItems = [
  {
    id: nanoid(),
    name: "Brot",
    checked: false,
  },
  {
    id: nanoid(),
    name: "Bananen",
    checked: false,
  },
  {
    id: nanoid(),
    name: "Marmelade",
    checked: false,
  },
  {
    id: nanoid(),
    name: "Milch",
    checked: true,
  },
  {
    id: nanoid(),
    name: "Salat",
    checked: true,
  },
];
