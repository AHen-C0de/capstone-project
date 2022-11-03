import styled from "styled-components";
import { GiCheckMark as CheckIcon } from "react-icons/gi";

export default function CheckInButton({ onItemsAdd, margin }) {
  return (
    <StyledButton onClick={onItemsAdd} margin={margin}>
      <p>Check-In</p>
      <CheckIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-secondary);
  color: var(--background-primary);
  border-radius: 0.2rem;
  padding: 0.3rem;
  font-size: 1.3rem;
  font-family: "Noto Sans";
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: ${({ margin }) => margin || 0};

  &:hover {
    background-color: var(--background-secondary-hover);
  }
`;
