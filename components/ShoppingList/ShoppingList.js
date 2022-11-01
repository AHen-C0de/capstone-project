import styled from "styled-components";

import ListContainer from "../ListContainer";
import ListItem from "./ListItem";

export default function ShoppingList({ listItems, onToggleItemChecked }) {
  return (
    <ListContainer>
      <StyledList>
        {listItems
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
        {listItems
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

  &:first-child {
    margin-bottom: 2rem;
  }
`;
