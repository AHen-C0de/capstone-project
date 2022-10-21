import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

import ListContainer from "../ListContainer";

export default function ShoppingListEditor({ items, onDelete, onAdd }) {
  const inputRef = useRef();
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []); // set focus on item input after page load

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemName = Object.fromEntries(formData).item;

    if (itemName === "") {
      alert("Type an item name!");
    } else if (
      items.find(
        (item) => item.name.toLowerCase() === itemName.toLowerCase()
      ) !== undefined
    ) {
      alert("Item already on the list!");
    } else {
      onAdd(itemName);
      setItemName("");
      inputRef.current.focus(); //set focus on input field
    }
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
          ref={inputRef} // set ref to set autofocus after submit
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <button type="submit">submit</button>
      </StyledForm>
      <Line />
      <List>
        {items.map(({ id, name }) => (
          <ListItemContent key={id}>
            <p>{name}</p>
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
  line-height: 2rem;
`;

const ListItemContent = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background-color: red;
  height: 1.5rem;
`;
