import styled from "styled-components";

import Image from "next/image";
import trashIcon from "/public/assets/icons/trash.svg";

export default function DeleteButton({ onDelete }) {
  return (
    <StyledButton onClick={onDelete} aria-label="lösche Item">
      <Image src={trashIcon} alt="Muelleimer Icon" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
