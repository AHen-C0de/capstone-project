import styled from "styled-components";
import { useState, useEffect } from "react";

import Input from "./Input";

export default function Form({
  allItems,
  recipes,
  listItems,
  onAdd,
  onOpenModal,
  itemInputRef,
}) {
  //input values
  const [itemInput, setItemInput] = useState("");
  const [recipeInput, setRecipeInput] = useState("");
  //rendering
  const [dropDownItems, setDropDownItems] = useState([]);
  const [dropDownRecipes, setDropDownRecipes] = useState([]);
  const [isFocusItemInput, setIsFocusItemInput] = useState(false);

  //set focus on item input after page load
  useEffect(() => {
    itemInputRef.current.focus();
  }, []);

  //open drop down when typing into input field
  function handleInput(event, inputSetter, dropDownSetter, inputMatcher) {
    const inputString = event.target.value;
    inputSetter(inputString);
    triggerDropDown(inputString, dropDownSetter, inputMatcher);
  }

  //evoke rendering drop down buttons for elements that match input
  function triggerDropDown(inputString, dropDownSetter, inputMatcher) {
    const matchedElements = inputMatcher(inputString);
    dropDownSetter(matchedElements);
  }

  //match item input with all items from DB
  function matchItemInput(value) {
    const editedValue = value.trim().toLowerCase();
    //clear drop down when clearing input field
    if (editedValue === "") {
      return [];
    }

    //filter out items from allItems, that are already on the shopping list
    const usedItemIds = listItems.map((usedItem) => usedItem.item_id);
    const availableItems = allItems.filter(
      (DBitem) => !usedItemIds.includes(DBitem.id)
    );

    const matchedItems = availableItems.filter((item) =>
      item.name.toLowerCase().startsWith(editedValue)
    );
    return matchedItems;
  }

  //match recipe input with all recipes from DB
  function matchRecipeInput(value) {
    const editedValue = value.trim().toLowerCase();
    //clear drop down when clearing input field
    if (editedValue === "") {
      return [];
    }
    const matchedRecipes = recipes.filter((recipe) => {
      const recipeWords = recipe.name.split(" ");
      const matchedRecipeWord = recipeWords.find((word) =>
        word.toLowerCase().startsWith(editedValue)
      );
      return matchedRecipeWord !== undefined ? true : false;
    });

    return matchedRecipes;
  }

  function handleClickItem(item) {
    onAdd(item); //add item to shopping list
    setItemInput("");
    setDropDownItems([]);
    setIsFocusItemInput(true); //to focus item input after adding item to list
  }

  function handleClickRecipe(recipe) {
    onOpenModal(recipe);
    setRecipeInput("");
  }

  function handleBlur() {
    setDropDownItems([]);
    setDropDownRecipes([]);
    //since onBlur event is automatically fired after clicking a dropDown button
    //and handleBlur() triggers AFTER handleAddItem(), isFocusItem state
    //is set to true within handleAddItem() and used here to re-focus the input
    if (isFocusItemInput) {
      itemInputRef.current.focus();
      setIsFocusItemInput(false);
    }
  }

  return (
    <StyledForm
      aria-label="Item hinzufügen"
      autoComplete="off" //turn off auto completions for typing input suggested by the browser
      onSubmit={(event) => event.preventDefault()}
    >
      <Input
        id="item"
        text="Item"
        ariaLabel="Itemname"
        placeholderText="Suche ein Item..."
        reference={itemInputRef}
        value={itemInput}
        onInput={(event) =>
          handleInput(event, setItemInput, setDropDownItems, matchItemInput)
        }
        onFocus={() =>
          triggerDropDown(itemInput, setDropDownItems, matchItemInput)
        }
        onBlur={handleBlur}
        dropDownItems={dropDownItems}
        dropDownAriaLabel="Item hinzufügen"
        onDropDownClick={handleClickItem}
      />
      <Input
        id="recipeItems"
        text="Rezepte"
        ariaLabel="Rezeptname"
        placeholderText="Suche ein Rezept..."
        value={recipeInput}
        onInput={(event) =>
          handleInput(
            event,
            setRecipeInput,
            setDropDownRecipes,
            matchRecipeInput
          )
        }
        onFocus={() =>
          triggerDropDown(recipeInput, setDropDownRecipes, matchRecipeInput)
        }
        onBlur={handleBlur}
        dropDownItems={dropDownRecipes}
        dropDownAriaLabel="öffne Rezept-Items"
        onDropDownClick={handleClickRecipe}
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
