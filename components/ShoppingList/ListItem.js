import styled from "styled-components";
import Image from "next/image";

import checkboxIcon from "../../public/assets/icons/checkbox.svg";
import checkboxIconEmpty from "../../public/assets/icons/checkbox_empty.svg";

export default function ListItem({ id, text, isChecked, onToggleItemChecked }) {
  return (
    <StyledListElement isChecked={isChecked}>
      <StyledButton
        aria-label={isChecked ? "uncheck item" : "check item"}
        onClick={() => onToggleItemChecked(id)}
        isChecked={isChecked}
      >
        {isChecked ? (
          <Image src={checkboxIcon} alt="checked checkbox icon" />
        ) : (
          <Image src={checkboxIconEmpty} alt="unchecked checkbox icon" />
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
  word-break: break-word;
  text-align: start;
`;
