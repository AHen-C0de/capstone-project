import styled from "styled-components";
import Image from "next/image";
// import {
//   MdCheckBoxOutlineBlank as CheckboxIconEmpty,
//   MdSdCardAlert,
// } from "react-icons/md";
//import { MdCheckBox as CheckboxIcon } from "react-icons/md";

import CheckboxIcon from "../../public/assets/icons/checkbox.svg";
import CheckboxIconEmpty from "../../public/assets/icons/checkbox_empty.svg";

export default function ListItem({ id, text, isChecked, onToggleItemChecked }) {
  return (
    <StyledListElement isChecked={isChecked}>
      <StyledButton
        aria-label={isChecked ? "uncheck item" : "check item"}
        onClick={() => onToggleItemChecked(id)}
        isChecked={isChecked}
      >
        {isChecked ? (
          <Image src={CheckboxIcon} />
        ) : (
          <Image src={CheckboxIconEmpty} />
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

// const StyledCheckBoxIcon = styled(CheckboxIcon)`
//   /* transform: scale(1.5); */
// `;

// const StyledCheckBoxIconEmpty = styled(CheckboxIconEmpty)`
//   transform: scale(1.5);
// `;
