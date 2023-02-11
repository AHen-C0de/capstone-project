import styled from "styled-components";
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
            <StyledForm>
              <Input
                id="item"
                labelText="Neues Produkt"
                ariaLabel="Produktname"
                placeholderText="Gebe ein Produkt ein..."
              />
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