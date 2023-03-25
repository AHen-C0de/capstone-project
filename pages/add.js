import styled from "styled-components";
import { useState } from "react";
import Head from "next/head";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOutButton from "../components/buttons/SignOutButton";
import Background from "../components/Background";
import ContentWrapper from "../components/ContentWrapper";
import "../components/Input/Input";
import Input from "../components/Input/Input";
import Modal from "../components/Modal";
import { getAllCategories } from "../services/categoryService";

//TODO: Add session to serverSideProps and component
//TODO: change all imports to relative path

export async function getServerSideProps(context) {
  // const session = await unstable_getServerSession(
  //   context.req,
  //   context.res,
  //   authOptions
  // );
  // if (session) {
  const categories = await getAllCategories();
  return {
    props: { categories: categories },
  };
  // } else return { props: {} };
}

export default function Add({ categories }) {
  //input values
  const [itemInput, setItemInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  //rendering
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showChosenCategory, setShowChosenCategory] = useState(false);
  //buffer clicked elements
  const [clickedCategory, setClickedCategory] = useState({});

  //TODO: Don't allow to submit data, when not picking category from dropDown -> show alter message to user
  //TODO: Refactor all methods of this kind to reduce redundancy

  function onClickCategory(category) {
    setClickedCategory(category); //buffer category for rendering & POST request
    setShowCategoryModal(false); //close category modal
    setShowChosenCategory(true); //display chosen category
  }

  async function handleItemSubmit(event) {
    event.preventDefault();
    await addItem(itemInput, clickedCategory.id);
  }

  async function addItem(name, category_id) {
    const data = {
      name: name,
      category: category_id,
    };
    await fetch("api/addItems", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async function handleCategorySubmit(event) {
    event.preventDefault();
    await addCategory(categoryInput);
  }

  async function addCategory(name) {
    const data = {
      name: name,
    };
    await fetch("api/addCategory", {
      method: "POST",
      body: JSON.stringify(data),
    });
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
            onSubmit={handleItemSubmit}
          >
            <fieldset>
              <legend>Neues Produkt</legend>
              <Input
                id="item"
                name="name"
                labelText="Name"
                ariaLabel="Produktname"
                placeholderText="Gebe ein Produkt ein..."
                value={itemInput}
                onInput={(event) => setItemInput(event.target.value)}
              />
              {showChosenCategory && <p>{clickedCategory.name}</p>}
              <button type="button" onClick={() => setShowCategoryModal(true)}>
                Wähle eine Kategorie...
              </button>

              {showCategoryModal && (
                <Modal onCloseModal={() => setShowCategoryModal(false)}>
                  <ol>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          type="button"
                          onClick={() => onClickCategory(category)}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ol>
                </Modal>
              )}
            </fieldset>
            <button type="submit">submit</button>
          </StyledForm>
          <StyledForm
            aria-label="Produkt speichern"
            autoComplete="off"
            onSubmit={handleCategorySubmit}
          >
            <fieldset>
              <legend>Neue Kategorie</legend>
              <Input
                id="new_category"
                labelText="Name"
                ariaLabel="neuer Kategoriename"
                placeholderText="Kategorie nicht dabei?"
                value={categoryInput}
                onInput={(event) => setCategoryInput(event.target.value)}
              />
            </fieldset>
            <button type="submit">submit</button>
          </StyledForm>
        </ContentWrapper>
      </main>
      <NavigationBar />
    </>
  );
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
`;
