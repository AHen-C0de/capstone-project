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
  const [isFocusInput, setIsFocusInput] = useState(false);
  const inputRef = useRef();

  //console.log(recipes);
  console.log(recipeInput);

  //set focus on item input after page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //open drop down when typing into input field
  function handleItemInput(event) {
    const inputString = event.target.value;
    setItemInput(inputString);
    triggerDropDown(inputString);
  }
  function handleRecipeInput(event) {
    const inputString = event.target.value;
    setRecipeInput(inputString);
    //triggerDropDown(inputString);
  }

  //evoke rendering drop down buttons for items that match input
  function triggerDropDown(inputString) {
    const matchedDropDownItems = matchInput(inputString);
    setDropDownItems(matchedDropDownItems);
  }

  //match input with all available items from DB
  function matchInput(value) {
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

  function handleAddItem(element) {
    onAdd(element);
    setItemInput("");
    setDropDownItems([]);
    setIsFocusInput(true); //to focus item input after adding item to list
  }

  function handleDelete(id) {
    onDelete(id);
    setItemInput("");
    setDropDownItems([]);
  }

  function handleBlur() {
    setDropDownItems([]);
    //since onBlur event is automatically fired after clicking a dropDown button
    //and handleBlur() triggers AFTER handleAddItem(), isFocusItem state
    //is set to true within handleAddItem() and used here to re-focus the input
    if (isFocusInput) {
      inputRef.current.focus();
      setIsFocusInput(false);
    }
  }

  return (
    <ListContainer>
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
          onInput={(event) => handleItemInput(event)} //don't use onChange() -> it ignores some events!!!
          onFocus={() => triggerDropDown(itemInput)}
          //close drop down, when losing focus
          onBlur={handleBlur}
        />
        {dropDownItems.length > 0 && (
          <InputDropDown
            optionElements={dropDownItems}
            ariaLabel="add item"
            onAddItem={handleAddItem}
          />
        )}
        <label htmlFor="recipeItems">Items für Rezepte</label>
        <input
          type="text"
          id="recipeItems"
          aria-label="recipe name"
          placeholder="Suche ein Rezept..."
          maxLength="30"
          //ref={inputRef} //set ref to set autofocus after submit
          value={recipeInput}
          onInput={(event) => handleRecipeInput(event)} //don't use onChange() -> it ignores some events!!!
          //onFocus={() => triggerDropDown(itemInput)}
          //close drop down, when losing focus
          //onBlur={handleBlur}
        />
        {dropDownItems.length > 0 && (
          <InputDropDown
            optionElements={dropDownItems}
            ariaLabel="add item"
            onAddItem={handleAddItem}
          />
        )}
      </StyledForm>
      <Line />
      <List>
        {items.map(({ id, name }) => (
          <ListItemContent key={id}>
            <ItemName>{name}</ItemName>
            <DeleteButton onClick={() => handleDelete(id)}>
              Löschen
            </DeleteButton>
          </ListItemContent>
        ))}
      </List>
    </ListContainer>
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
