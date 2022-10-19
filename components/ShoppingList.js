import styled from "styled-components";

import ListItem from "./ListItem";

export default function ShoppingList({ items, onToggleItemChecked }) {
  return (
    <ListWrapper>
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
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  background-color: #fad861;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 2rem auto;
  box-shadow: 5px 5px 6px #c2c2c2;
`;

const StyledList = styled.ul`
  list-style: none;
`;
