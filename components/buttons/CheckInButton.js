import styled from "styled-components";
import { GiCheckMark as CheckIcon } from "react-icons/gi";

export default function CheckInButton({ onItemsAdd, margin }) {
  return (
    <StyledButton onClick={onItemsAdd} margin={margin}>
      <p>Check-In</p>
      <CheckIcon alt="Checkmark Icon" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-secondary__dark);
  color: var(--background-primary);
  border-radius: 0.2rem;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
  font-size: 1.3rem;
  font-family: "Inter";
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  box-shadow: var(--button-shaddow);
  margin: ${({ margin }) => margin || 0};

  &:hover {
    background-color: var(--background-secondary__hover);
  }
`;
