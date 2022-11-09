import styled from "styled-components";

import { RiCloseFill as CrossIcon } from "react-icons/ri";

export default function CloseButton({ onClose, absolutePositionRight }) {
  return (
    <StyledButton
      onClick={onClose}
      posRight={absolutePositionRight}
      aria-label="schließe Fenster"
    >
      <CrossIcon size={27} fill="#FFFFFF" alt="Kreuz Icon" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d83434;
  border-radius: 0.5rem;
  padding: 0.1rem;
  cursor: pointer;
  position: absolute;
  box-shadow: var(--button-shaddow);
  right: ${({ posRight }) => posRight || "0"};
`;
