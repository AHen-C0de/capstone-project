import styled from "styled-components";

import Image from "next/image";
import TrashIcon from "/public/assets/icons/trash.svg";

export default function DeleteButton({ onDelete }) {
  return (
    <StyledButton onClick={onDelete}>
      <Image src={TrashIcon} alt="Muelleimer Icon" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
