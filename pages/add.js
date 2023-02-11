import Head from "next/head";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOutButton from "../components/buttons/SignOutButton";
import "../components/Input/Input"
import Input from "../components/Input/Input";

export default function Add() {
    return (
      <>
        <Head>
          <title>Produkte hinzufügen</title>
        </Head>
        <Header text="Produkte hinzufügen">
          {/* <SignOutButton onSignOut={signOut} /> */}
        </Header>
        <main>
          <form>
            <Input
              id="item"
              labelText="Neues Produkt"
              ariaLabel="Produktname"
              placeholderText="Gebe ein Produkt ein..."
            />
          </form>
        </main>
        <NavigationBar />
      </>
    )
}