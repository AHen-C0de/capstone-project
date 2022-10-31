import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

import DropDown from "./DropDown";

export default function Form({
  allItems,
  recipes,
  listItems,
  onAdd,
  onOpenModal,
}) {
  //input values
  const [itemInput, setItemInput] = useState("");
  const [recipeInput, setRecipeInput] = useState("");
  //rendering
  const [dropDownItems, setDropDownItems] = useState([]);
  const [dropDownRecipes, setDropDownRecipes] = useState([]);
  const [isFocusItemInput, setIsFocusItemInput] = useState(false);
  const inputRef = useRef();

  //set focus on item input after page load
  useEffect(() => {
    inputRef.current.focus();
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

  function handleAddSingleItem(item) {
    onAdd(item);
    setItemInput("");
    setDropDownItems([]);
    setIsFocusItemInput(true); //to focus item input after adding item to list
  }

  function handleBlur() {
    setDropDownItems([]);
    setDropDownRecipes([]);
    //since onBlur event is automatically fired after clicking a dropDown button
    //and handleBlur() triggers AFTER handleAddItem(), isFocusItem state
    //is set to true within handleAddItem() and used here to re-focus the input
    if (isFocusItemInput) {
      inputRef.current.focus();
      setIsFocusItemInput(false);
    }
  }

  return (
    <StyledForm
      aria-label="Item hinzufügen"
      autoComplete="off" //turn off auto completions for typing input suggested by the browser
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor="item">Item</label>
      <input
        type="text"
        id="item"
        aria-label="Itemname"
        placeholder="Suche ein Item..."
        maxLength="30"
        ref={inputRef} //set ref to set autofocus after submit
        value={itemInput}
        onInput={(event) =>
          handleInput(event, setItemInput, setDropDownItems, matchItemInput)
        } //don't use onChange() -> it ignores some events!!!
        onFocus={() =>
          triggerDropDown(itemInput, setDropDownItems, matchItemInput)
        }
        //close drop down, when losing focus
        onBlur={handleBlur}
      />
      {dropDownItems.length > 0 && (
        <DropDown
          optionElements={dropDownItems}
          ariaLabel="Item hinzufügen"
          onButtonClick={handleAddSingleItem}
        />
      )}
      <label htmlFor="recipeItems">Items für Rezepte</label>
      <input
        type="text"
        id="recipeItems"
        aria-label="Rezeptname"
        placeholder="Suche ein Rezept..."
        maxLength="30"
        value={recipeInput}
        onInput={(event) =>
          handleInput(
            event,
            setRecipeInput,
            setDropDownRecipes,
            matchRecipeInput
          )
        } //don't use onChange() -> it ignores some events!!!
        onFocus={() =>
          triggerDropDown(recipeInput, setDropDownRecipes, matchRecipeInput)
        }
        //close drop down, when losing focus
        onBlur={handleBlur}
      />
      {dropDownRecipes.length > 0 && (
        <DropDown
          optionElements={dropDownRecipes}
          ariaLabel="öffne Rezept-Items"
          onButtonClick={() => {
            setRecipeInput("");
            onOpenModal;
          }}
        />
      )}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
