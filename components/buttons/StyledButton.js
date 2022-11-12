import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--background-secondary__dark);
  color: var(--background-primary);
  border-radius: 0.2rem;
  font-size: 1.3rem;
  font-family: "Inter";
  font-weight: 500;
  box-shadow: var(--button-shaddow);
  cursor: pointer;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin || 0};
  gap: ${({ gap }) => gap};
  left: ${({ left }) => left || 0};

  &:hover {
    background-color: var(--background-secondary__hover);
  }
`;

export default StyledButton;
