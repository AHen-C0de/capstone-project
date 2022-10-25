import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

import ListContainer from "../ListContainer";
import InputDropDown from "./InputDropDown";
import { getAllItemsFromDB } from "/services/db.js";

export default function ShoppingListEditor({ items, onDelete, onAdd }) {
  const [allItems, setAllItems] = useState(getAllItemsFromDB);
  const [dropDownItems, setDropDownItems] = useState([]);
  const inputRef = useRef();

  //set focus on item input after page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //reset dropDownItems state, when shopping list (items) changed,
  //to remove buttons from screen after submit
  useEffect(() => {
    setDropDownItems([]);
  }, [items]);

  function matchInput(value) {
    const editedValue = value.trim().toLowerCase(); //trim() -> remove white spaces at beginning and end of the name
    //clear drop down when clearing input field
    if (editedValue === "") {
      setDropDownItems([]);
      return;
    }
    const matchedItems = allItems.filter((item) =>
      item.name.toLowerCase().startsWith(editedValue)
    );
    //filter out matched items, that are already on the shopping list
    const uniqueMatchedItems = matchedItems.filter((matchedItem) => {
      return (
        items.find((item) => matchedItem.id === item.item_id) === undefined
      );
    });
    setDropDownItems(uniqueMatchedItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    event.target.reset();
    inputRef.current.focus();
  }

  return (
    <ListContainer>
      <StyledForm
        aria-label="add items"
        onSubmit={(event) => onSubmit(event)}
        autoComplete="off"
      >
        <label htmlFor="item">Item</label>
        <input
          type="text"
          id="item"
          aria-label="item name"
          placeholder="Brot"
          maxLength="30"
          ref={inputRef} // set ref to set autofocus after submit
          onChange={(event) => matchInput(event.target.value)}
        />
        <InputDropDown
          optionElements={dropDownItems}
          ariaLabel="add item"
          onAdd={onAdd}
        />
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
