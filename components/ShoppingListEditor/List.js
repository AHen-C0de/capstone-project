import styled from "styled-components";

import DeleteButton from "../Buttons/DeleteButton";

export default function List({ listItems, onDelete }) {
  return (
    <StyledList>
      {listItems.map(({ id, name }) => (
        <ListItem key={id}>
          <Name>{name}</Name>
          <DeleteButton
            aria-label="lösche Item"
            onDelete={() => onDelete(id)}
          />
        </ListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  height: fit-content;
  overflow-y: auto;
  list-style: none;
  border: solid 2px var(--list-secondary);
  border-radius: 0.5rem;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Handlee";

  &:nth-child(odd) {
    background-color: var(--list-secondary);
  }
`;

const Name = styled.p`
  word-break: break-word;
  line-height: normal;
`;
