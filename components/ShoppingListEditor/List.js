import styled from "styled-components";

export default function List({ listItems, onDelete }) {
  return (
    <StyledList>
      {listItems.map(({ id, name }) => (
        <ListItem key={id}>
          <Name>{name}</Name>
          <DeleteButton aria-label="lösche Item" onClick={() => onDelete(id)}>
            Löschen
          </DeleteButton>
        </ListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  word-break: break-word;
  line-height: normal;
`;

const DeleteButton = styled.button`
  background-color: red;
  height: 1.5rem;
`;
