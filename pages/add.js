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
import { getAllCategories } from "../services/categoryService";
import { handleInput, triggerDropDown } from "../utils/formFun";

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
  const [dropDownCategories, setDropDownCategories] = useState([]);
  //buffer clicked elements
  const [clickedCategory, setClickedCategory] = useState({});

  //TODO: Don't allow to submit data, when not picking category from dropDown -> show alter message to user
  //TODO: Refactor all methods of this kind to reduce redundancy
  /**
   * Match category input with all categories from DB
   * @param {String} inputValue from Category input field in Product form
   * @returns {string[]} matched Categories
   */
  function matchCategoryInput(inputValue) {
    const editedInput = inputValue.trim().toLowerCase();
    //clear drop down when clearing input field
    if (editedInput === "") {
      return [];
    }

    const matchedCategories = categories.filter((category) =>
      category.name.toLowerCase().startsWith(editedInput)
    );
    return matchedCategories;
  }

  function handleClickCategory(category) {
    setClickedCategory(category); //buffer category for POST request
    setCategoryInput(category.name); //write clicked category into input field
    setDropDownCategories([]); //close DropDown
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

  async function handleSubmit(event) {
    event.preventDefault();
    await addItem(itemInput, clickedCategory.id);
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
                name="name"
                labelText="Name"
                ariaLabel="Produktname"
                placeholderText="Gebe ein Produkt ein..."
                value={itemInput}
                onInput={(event) => handleInput(event, setItemInput)}
              />
              <Input
                id="category"
                name="category"
                labelText="Kategorie"
                ariaLabel="Kategoriename"
                placeholderText="Welche Kategorie?"
                showIcon={true}
                value={categoryInput}
                onInput={(event) =>
                  handleInput(
                    event,
                    setCategoryInput,
                    setDropDownCategories,
                    matchCategoryInput
                  )
                }
                dropDownItems={dropDownCategories}
                dropDownAriaLabel="Kategorie auswählen"
                onDropDownClick={handleClickCategory}
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
