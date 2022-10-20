import styled from "styled-components";

import ListContainer from "../ListContainer";

export default function ShoppingListEditor({ items, onDelete, onAdd }) {
  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemName = Object.fromEntries(formData).item;

    onAdd(itemName);
  }

  return (
    <ListContainer>
      <StyledForm aria-label="add items" onSubmit={submitForm}>
        <label htmlFor="item">Item</label>
        <input type="text" name="item" id="item" aria-label="item name" />
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
