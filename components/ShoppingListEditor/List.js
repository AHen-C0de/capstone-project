import styled from "styled-components";

import DeleteButton from "../buttons/DeleteButton";
import ListEmptyMessage from "../ListEmptyMessage";

export default function List({ listItems, onDelete }) {
  const isEmpty = listItems.length === 0;

  return (
    <>
      {isEmpty ? (
        <ListEmptyMessage>Leer...</ListEmptyMessage>
      ) : (
        <StyledList hideBorder={isEmpty} alignMiddle={isEmpty}>
          {listItems.map(({ id, item }) => (
            <ListItem key={id}>
              <Name>{item.name}</Name>
              <DeleteButton onDelete={() => onDelete(id)} />
            </ListItem>
          ))}
        </StyledList>
      )}
    </>
  );
}

const StyledList = styled.ul`
  overflow-y: auto;
  list-style: none;
  border-radius: 0.5rem;
  border: ${({ hideBorder }) =>
    hideBorder ? "none" : "solid 2px var(--list-secondary)"};
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
