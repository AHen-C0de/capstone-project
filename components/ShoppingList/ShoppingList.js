import styled from "styled-components";

import ListContainer from "../ListContainer";
import ListItem from "./ListItem";
import ListEmptyMessage from "../ListEmptyMessage";
import { calculateObjectSize } from "bson";

export default function ShoppingList({ listItems, onToggleItemChecked }) {
  const isEmpty = listItems.length === 0;
  //height={"(calc((100vh - 8rem) / 100) * 50)"}
  return (
    <ListContainer>
      <StyledList>
        {listItems
          .filter((shoppingItem) => !shoppingItem.checked)
          .map(({ id, item, checked }) => (
            <ListItem
              key={id}
              id={id}
              text={item.name}
              isChecked={checked}
              onToggleItemChecked={() => onToggleItemChecked(id, checked)}
            />
          ))}
      </StyledList>
      {isEmpty ? (
        <ListEmptyMessage>Leer...</ListEmptyMessage>
      ) : (
        <>
          <StyledText>Fertig:</StyledText>
          <Line />
        </>
      )}
      <StyledList>
        {listItems
          .filter((shoppingItem) => shoppingItem.checked)
          .map(({ id, item, checked }) => (
            <ListItem
              key={id}
              id={id}
              text={item.name}
              isChecked={checked}
              onToggleItemChecked={() => onToggleItemChecked(id, checked)}
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

const StyledText = styled.span`
  font-family: "Lily Script One";
  color: var(--background-secondary);
  font-size: 1.6rem;
  position: relative;
  left: 1rem;
`;

const Line = styled.div`
  width: 70%;
  height: 0.1rem;
  border-radius: 1rem;
  background-color: var(--background-secondary);
  margin: 0.2rem 0 1rem 0;
`;
