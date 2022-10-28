import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

import ListContainer from "../ListContainer";
import InputDropDown from "./InputDropDown";
import { getAllItemsFromDB, getRecipesFromDB } from "/services/db.js";

export default function ShoppingListEditor({ items, onDelete, onAdd }) {
  //DB request
  const [allItems, setAllItems] = useState(getAllItemsFromDB);
  const [recipes, setRecipes] = useState(getRecipesFromDB);
  //input values
  const [itemInput, setItemInput] = useState("");
  const [recipeInput, setRecipeInput] = useState("");
  //rendering
  const [dropDownItems, setDropDownItems] = useState([]);
  const [dropDownRecipes, setDropDownRecipes] = useState([]);
  const [recipeItems, setRecipeItems] = useState([]);
  const [isFocusItemInput, setIsFocusItemInput] = useState(false);
  const [isShowRecipePopUp, setIsShowRecipePopUp] = useState(false);
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
    const usedItemIds = items.map((usedItem) => usedItem.item_id);
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

  function handleAddItem(element) {
    onAdd(element);
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

  function openPopUp(recipe) {
    setIsShowRecipePopUp(true);
    const recipeItems = allItems.filter((item) =>
      recipe.item_ids.includes(item.id)
    );
    //add available attr. whether recipe item is already on the shopping list
    const usedItemIds = items.map((usedItem) => usedItem.item_id);
    const recipeItemsAndStatus = recipeItems.map((recipeItem) =>
      usedItemIds.includes(recipeItem.id)
        ? { ...recipeItem, isOnList: true }
        : { ...recipeItem, isOnList: false }
    );

    setRecipeItems(recipeItemsAndStatus);
  }

  return (
    <>
      <ListContainer isBlur={isShowRecipePopUp}>
        <StyledForm
          aria-label="add items"
          autoComplete="off" //turn off auto completions for typing input suggested by the browser
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="item">Item</label>
          <input
            type="text"
            id="item"
            aria-label="item name"
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
            <InputDropDown
              optionElements={dropDownItems}
              ariaLabel="add item"
              onButtonClick={handleAddItem}
            />
          )}
          <label htmlFor="recipeItems">Items für Rezepte</label>
          <input
            type="text"
            id="recipeItems"
            aria-label="recipe name"
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
            <InputDropDown
              optionElements={dropDownRecipes}
              ariaLabel="open recipe items"
              onButtonClick={openPopUp}
            />
          )}
        </StyledForm>
        <Line />
        <List>
          {items.map(({ id, name }) => (
            <ListItemContent key={id}>
              <ItemName>{name}</ItemName>
              <DeleteButton onClick={() => onDelete(id)}>Löschen</DeleteButton>
            </ListItemContent>
          ))}
        </List>
      </ListContainer>
      {isShowRecipePopUp && (
        <Modal>
          <RecipePopUp>
            <List>
              {recipeItems.map(({ id, name }) => (
                <ListItemContent key={id}>
                  <ItemName>{name}</ItemName>
                </ListItemContent>
              ))}
            </List>
            <button onClick={() => setIsShowRecipePopUp(false)}>
              Schließen
            </button>
          </RecipePopUp>
        </Modal>
      )}
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 90%;
  height: 0.2rem;
  border-radius: 1rem;
  background-color: black;
  align-self: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItemContent = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.p`
  word-break: break-word;
  line-height: normal;
`;

const DeleteButton = styled.button`
  background-color: red;
  height: 1.5rem;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const RecipePopUp = styled.article`
  width: 80%;
  padding: 1rem;
  background-color: white;
  position: absolute;
  border-radius: 1rem;
  justify-self: center;
  z-index: 20;
`;
