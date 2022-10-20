import Head from "next/head";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ShoppingListEditor from "../components/ShoppingListEditor/ShoppingListEditor";

export default function Edit({ items, onDelete }) {
  return (
    <>
      <Head>
        <title>Liste bearbeiten</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>Liste bearbeiten</Header>
      <main>
        <ShoppingListEditor items={items} onDelete={onDelete} />
      </main>
      <NavigationBar />
    </>
  );
}
