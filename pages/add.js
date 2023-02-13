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
  const [itemInput,     setItemInput]     = useState("")
  const [categoryInput, setCategoryInput] = useState("")

  function handleInput(event, inputSetter) {
    const inputString = event.target.value
    inputSetter(inputString)
  }

  async function addItem(item) {
    const data = {
      item: item,
    };
    await fetch("api/addItems", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(event.target)
    console.log(formData)
    console.log(data)
    console.log(itemInput)
    console.log(categoryInput)
    
    await addItem(data)
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
                  name="item_name"
                  labelText="Name"
                  ariaLabel="Produktname"
                  placeholderText="Gebe ein Produkt ein..."
                  value={itemInput}
                  onInput={(event) => handleInput(event, setItemInput)}
                />
                <Input
                  id="category"
                  name="category_name"
                  labelText="Kategorie"
                  ariaLabel="Kategoriename"
                  placeholderText="Für welche Kategorie?"
                  value={categoryInput}
                  onInput={(event) => handleInput(event, setCategoryInput)}
                />
              </fieldset>
              <button type="submit">submit</button>
            </StyledForm>
            <StyledForm
              aria-label="Produkt speichern"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <fieldset>
                <legend>Neue Kategorie</legend>
                <Input
                  id="new_category"
                  labelText="Name"
                  ariaLabel="neuer Kategoriename"
                  placeholderText="Kategorie nicht dabei?"
                  // value={""}
                  // onInput={(event) => handleInput(event, setItemInput)}
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