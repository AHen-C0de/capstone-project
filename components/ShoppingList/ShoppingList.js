import styled from "styled-components";

import ListContainer from "../ListContainer";
import ListItem from "./ListItem";

export default function ShoppingList({ items, onToggleItemChecked }) {
  return (
    <ListContainer>
      <StyledList>
        {items
          .filter((item) => !item.checked)
          .map(({ id, name, checked }) => (
            <ListItem
              key={id}
              id={id}
              text={name}
              isChecked={checked}
              onToggleItemChecked={onToggleItemChecked}
            />
          ))}
      </StyledList>
      <StyledList>
        {items
          .filter((item) => item.checked)
          .map(({ id, name, checked }) => (
            <ListItem
              key={id}
              id={id}
              text={name}
              isChecked={checked}
              onToggleItemChecked={onToggleItemChecked}
            />
          ))}
      </StyledList>
    </ListContainer>
  );
}

const StyledList = styled.ul`
  list-style: none;
`;
