import styled from "styled-components";

import CheckboxIcon from "../icons/CheckboxIcon";
import CheckboxEmptyIcon from "../icons/CheckboxEmptyIcon";

export default function ListItem({ id, text, isChecked, onToggleItemChecked }) {
  return (
    <StyledListElement isChecked={isChecked}>
      <StyledButton
        aria-label={isChecked ? "uncheck item" : "check item"}
        onClick={() => onToggleItemChecked(id)}
        isChecked={isChecked}
      >
        {isChecked ? (
          <CheckboxIcon fillColor="grey" alt="abgehaktes Checkbox-Icon" />
        ) : (
          <CheckboxEmptyIcon alt="leeres Checkbox-Icon" />
        )}
        {text}
      </StyledButton>
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  border-radius: 0.5rem;
  &:nth-child(odd) {
    background-color: var(--list-secondary);
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  color: ${({ isChecked }) => (isChecked ? "grey" : "black")};
  font-style: ${({ isChecked }) => (isChecked ? "italic" : "normal")};
  word-break: break-word;
  text-align: start;
`;
