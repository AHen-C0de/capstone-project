import styled from "styled-components";

import ListContainer from "../ListContainer";

export default function ShoppingListEditor({ items }) {
  return (
    <ListContainer>
      {items.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ListContainer>
  );
}

const StyledList = styled.ul`
  list-style: none;
`;
