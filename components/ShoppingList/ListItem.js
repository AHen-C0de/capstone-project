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
          <CheckboxIcon fillColor="#8E8E8E" alt="abgehaktes Checkbox-Icon" />
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  text-align: start;
  border: none;
  background-color: transparent;
  padding: 0.5rem 0.7rem;
  width: 100%;
  height: 100%;
  word-break: break-word;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Handlee";
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  color: ${({ isChecked }) => (isChecked ? "#8E8E8E" : "#000000")};
  font-style: ${({ isChecked }) => (isChecked ? "italic" : "normal")};
`;
