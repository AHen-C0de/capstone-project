import styled from "styled-components";
import { FaSearch as SearchIcon } from "react-icons/fa";

export default function CheckInButton() {
  return (
    <StyledButton>
      <SearchIcon />
      <p>Check-In</p>
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
