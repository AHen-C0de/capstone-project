import styled from "styled-components";
import TrashIcon from "/public/assets/icons/trash.svg";
import Image from "next/image";

export default function DeleteButton() {
  return (
    <StyledButton>
      <Image src={TrashIcon} alt="trash-icon" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
