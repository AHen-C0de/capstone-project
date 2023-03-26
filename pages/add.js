import styled from "styled-components";
import { useState } from "react";
import Head from "next/head";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Header from "../components/Header";
import SignIn from "../components/SignIn";
import SignOutButton from "../components/buttons/SignOutButton";
import Background from "../components/Background";
import { ContentWrapper } from "../components/BasicComponents";
import Input from "../components/Input/Input";
import Modal from "../components/Modal";
import { StyledTextButton } from "../components/buttons/templates";
import { getAllCategories } from "../services/categoryService";

//TODO: Load Categories in item input when clicking button, so lately added categories are loaded !!!
//TODO: reset form when sent
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
  //buffer clicked elements
  const [clickedCategory, setClickedCategory] = useState(null);

  //TODO: give all buttons font-family: 'Inter'
  //TODO: Don't allow to submit data, when not picking category from dropDown -> show alter message to user
  //TODO: Refactor all methods of this kind to reduce redundancy

  function onClickCategory(category) {
    setClickedCategory(category); //buffer category for rendering & POST request
    setShowCategoryModal(false); //close category modal
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
        <ContentWrapper gap="3rem">
          <StyledForm
            aria-label="Produkt speichern"
            autoComplete="off"
            onSubmit={handleItemSubmit}
          >
            <Input
              id="item"
              name="name"
              labelText="Neues Produkt"
              placeholderText="Gebe ein Produkt ein..."
              value={itemInput}
              onInput={(event) => setItemInput(event.target.value)}
            />
            <ChooseCategoryButton
              type="button"
              onClick={() => setShowCategoryModal(true)}
            >
              {clickedCategory != null
                ? clickedCategory.name
                : "Wähle eine Kategorie..."}
            </ChooseCategoryButton>

            {showCategoryModal && (
              <Modal
                onCloseModal={() => setShowCategoryModal(false)}
                backgroundColor="var(--list-secondary)"
              >
                <StyledCategoryList>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <StyledCategoryButton
                        type="button"
                        onClick={() => onClickCategory(category)}
                      >
                        {category.name}
                      </StyledCategoryButton>
                    </li>
                  ))}
                </StyledCategoryList>
              </Modal>
            )}
            <StyledTextButton
              type="submit"
              aria-label="Produkt speichern"
              margin="1rem 0 0 0"
            >
              Hinzufügen
            </StyledTextButton>
          </StyledForm>
          <StyledForm
            aria-label="Produkt speichern"
            autoComplete="off"
            onSubmit={handleCategorySubmit}
          >
            <Input
              id="new_category"
              labelText="Neue Kategorie"
              placeholderText="Kategorie nicht dabei?"
              value={categoryInput}
              onInput={(event) => setCategoryInput(event.target.value)}
            />
            <StyledTextButton
              type="submit"
              aria-label="Kategorie speichern"
              margin="1rem 0 0 0"
            >
              Hinzufügen
            </StyledTextButton>
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
  align-items: center;
  gap: 0.7rem;
  background-color: var(--list-secondary);
  padding: 1rem;
  width: 100%;
  box-shadow: var(--listContainer-shadow);
  border-radius: 0.5rem;
  border: 1px solid var(--list-primary);
`;

const ChooseCategoryButton = styled.button`
  background: var(--list-primary__gradient);
  background-color: var(--list-primary);
  padding: 0.5rem 0;
  border-radius: 2rem;
  font-size: 1.1rem;
  width: 90%;
  font-family: "Inter";
`;

const StyledCategoryList = styled.ul`
  list-style: none;
  padding: 1rem 3.5rem;
`;

const StyledCategoryButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: var(--list-primary__gradient);
  background-color: var(--list-primary);
  border-radius: 0.5rem;
  font-family: "Inter";
`;
