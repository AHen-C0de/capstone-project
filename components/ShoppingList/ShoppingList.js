import styled from "styled-components";

import ListContainer from "../ListContainer";
import ListItem from "./ListItem";

export default function ShoppingList({ listItems, onToggleItemChecked }) {
  return (
    <ListContainer>
      <ScrollContainer>
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

        <StyledText>Fertig:</StyledText>
        <Line />
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
      </ScrollContainer>
    </ListContainer>
  );
}

const ScrollContainer = styled.div`
  height: fit-content;
  overflow-y: auto;
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
  align-self: center;
  margin: 0.2rem 0 1rem 0;
`;
