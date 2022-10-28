import styled from "styled-components";
import { GiCheckMark as CheckIcon } from "react-icons/gi";

export default function CheckInButton() {
  return (
    <StyledButton>
      <p>Check-In</p>
      <CheckIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-secondary);
  color: white;
  border-radius: 0.2rem;
  padding: 0.3rem;
  font-size: 1.1rem;
  display: flex;
  gap: 0.5rem;
`;
