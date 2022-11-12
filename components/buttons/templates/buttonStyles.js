import styled from "styled-components";

const StyledTextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--background-secondary);
  background: var(--background-secondary__gradient);
  color: var(--background-primary);
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-family: "Inter";
  font-weight: 500;
  box-shadow: var(--button-shaddow);
  cursor: pointer;
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  left: ${({ left }) => left || 0};
  width: ${({ width }) => width || "fit-content"};

  &:hover {
    box-shadow: var(--buttonshaddow__hover);
  }
`;

const StyledIconButton = styled.button`
  width: fit-content;
  padding: 0.6rem;
  margin: auto;
  background-color: var(--background-secondary);
  background: var(--background-secondary__gradient);
  border-radius: 0.5rem;
  border: none;
  box-shadow: var(--button-shaddow);

  &:hover {
    box-shadow: var(--buttonshaddow__hover);
  }
`;

export { StyledTextButton, StyledIconButton };
