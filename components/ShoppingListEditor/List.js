import styled from "styled-components";

import DeleteButton from "../buttons/DeleteButton";

export default function List({ listItems, onDelete }) {
  return (
    <StyledList>
      {listItems.map(({ id, name }) => (
        <ListItem key={id}>
          <Name>{name}</Name>
          <DeleteButton onDelete={() => onDelete(id)}>Löschen</DeleteButton>
        </ListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  height: 49vh;
  overflow-y: auto;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  padding: 0.7rem;
  border-radius: 0.5rem;

  &:nth-child(odd) {
    background-color: var(--list-secondary);
  }
`;

const Name = styled.p`
  word-break: break-word;
  line-height: normal;
`;
