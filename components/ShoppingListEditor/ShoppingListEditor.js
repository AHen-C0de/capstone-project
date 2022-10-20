import styled from "styled-components";

import ListContainer from "../ListContainer";

export default function ShoppingListEditor({ items, onDelete }) {
  return (
    <ListContainer>
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
