import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList({ listItems, onToggleItemChecked }) {
  return (
    <StyledList>
      {listItems.map(({ id, item, checked }) => (
        <ListItem
          key={id}
          id={id}
          text={item.name}
          isChecked={checked}
          onToggleItemChecked={() => onToggleItemChecked(id, checked)}
        />
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;

  &:first-child {
    margin-bottom: 2rem;
  }
`;
