import styled from "styled-components";
import { useState } from "react";
import Head from "next/head";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOutButton from "../components/buttons/SignOutButton";
import Background from "../components/Background";
import ContentWrapper from "../components/ContentWrapper";
import "../components/Input/Input"
import Input from "../components/Input/Input";

export default function Add() {
  const [itemInput, setItemInput] = useState("")

  function handleInput(event) {
    const inputString = event.target.value
    setItemInput(inputString)
  }

  async function addItem(inputString) {
    const data = {
      item: inputString,
    };
    await fetch("api/addItems", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    addItem(itemInput)
  }

    return (
      <>
        <Head>
          <title>Produkte hinzufügen</title>
        </Head>
        <Header text="Produkte hinzufügen">
          {/* <SignOutButton onSignOut={signOut} /> */}
        </Header>
        <main>
          <Background opacity="0.7" />
          <ContentWrapper>
            <StyledForm
              aria-label="Produkt speichern"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <fieldset>
                <legend>Neues Produkt</legend>
                <Input
                  id="item"
                  labelText="Name"
                  ariaLabel="Produktname"
                  placeholderText="Gebe ein Produkt ein..."
                  value={itemInput}
                  onInput={handleInput}
                />
                <Input
                  id="category"
                  labelText="Kategorie"
                  ariaLabel="Kategoriename"
                  placeholderText="Für welche Kategorie?"
                  value={""}
                  onInput={handleInput}
                />
              </fieldset>
              <fieldset>
                <legend>Neue Kategorie</legend>
                <Input
                  id="new_category"
                  labelText="Name"
                  ariaLabel="neuer Kategoriename"
                  placeholderText="Kategorie nicht dabei?"
                  value={""}
                  onInput={handleInput}
                />
              </fieldset>
              <button type="submit">submit</button>
            </StyledForm>
          </ContentWrapper>
        </main>
        <NavigationBar />
      </>
    )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--list-secondary);
  padding: 1rem;
  width: 100%;
  box-shadow: var(--listContainer-shadow);
  height: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--list-primary);
`