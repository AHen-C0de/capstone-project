import styled from "styled-components";

export default function CheckInButton() {
  return <StyledButton>Check-In</StyledButton>;
}

const StyledButton = styled.button`
  background-color: var(--background-secondary);
  color: white;
  border-radius: 0.2rem;
  padding: 0.3rem;
  font-size: 1.1rem;
`;
