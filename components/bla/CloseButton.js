import styled from "styled-components";

import { RiCloseFill as CrossIcon } from "react-icons/ri";

export default function CloseButton({ onClose, absolutePositionRight }) {
  return (
    <StyledButton onClick={() => onClose()} posRight={absolutePositionRight}>
      <CrossIcon size={27} fill="#FFFFFF" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d83434;
  border-radius: 50%;
  padding: 0.1rem;
  cursor: pointer;
  position: absolute;
  right: ${({ posRight }) => posRight || "0"};
`;
