import Head from "next/head";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOutButton from "../components/buttons/SignOutButton";

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

        </main>
        <NavigationBar />
      </>
    )
}