import styled from "styled-components";

import ListContainer from "../ListContainer";
import ListItem from "./ListItem";
import ListEmptyMessage from "../ListEmptyMessage";

export default function ShoppingList({ listItems, onToggleItemChecked }) {
  const isEmpty = listItems.length === 0;

  return (
    <ListContainer>
      <ScrollContainer alignMiddle={isEmpty}>
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
      </ScrollContainer>
    </ListContainer>
  );
}

const ScrollContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: ${({ alignMiddle }) =>
    alignMiddle ? "center" : "flex-start"};
`;

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
