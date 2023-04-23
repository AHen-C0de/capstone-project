import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList({
  listItems,
  onToggleItemChecked,
  listItemSetter,
}) {
  return (
    <StyledList>
      {listItems.map(({ id, name, checked }) => (
        <ListItem
          key={id}
          id={id}
          text={name}
          isChecked={checked}
          onToggleItemChecked={() => onToggleItemChecked(id, listItemSetter)}
        />
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  & li:last-child {
    margin-bottom: 2rem;
  }
`;
