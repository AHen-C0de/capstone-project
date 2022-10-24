import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

import ListContainer from "../ListContainer";
import { getAllItemsFromDB } from "/services/db.js";

export default function ShoppingListEditor({ items, onDelete, onAdd }) {
  const [allItems, setAllItems] = useState(getAllItemsFromDB);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []); //set focus on item input after page load

  function matchInput(value) {
    console.log(value);
    const editedValue = value.trim().toLowerCase(); //trim() -> remove white spaces at beginning and end of the name

    if (editedValue !== "") {
      const matchedItems = allItems.filter((item) =>
        item.name.toLowerCase().startsWith(editedValue)
      );
      console.log(matchedItems);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const itemName = Object.fromEntries(formData).item;

    const trimmedItemName = itemName.trim(); //remove white spaces at beginning and end of the name

    // --- Check user input ---
    if (trimmedItemName === "") {
      alert("Type an item name!");
      return;
    }
    if (
      items.find(
        (item) => item.name.toLowerCase() === trimmedItemName.toLowerCase()
      ) !== undefined
    ) {
      alert("Item already on the list!");
      return;
    }

    onAdd(trimmedItemName);
    form.reset();
    inputRef.current.focus(); //set focus on input field
  }

  return (
    <ListContainer>
      <StyledForm aria-label="add items" onSubmit={submitForm}>
        <label htmlFor="item">Item</label>
        <input
          type="text"
          name="item"
          id="item"
          aria-label="item name"
          placeholder="Brot"
          maxLength="30"
          ref={inputRef} // set ref to set autofocus after submit
          onChange={(event) => matchInput(event.target.value)}
        />
        <button type="submit">submit</button>
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
