import styled from "styled-components";

const StyledTextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--background-secondary);
  background: var(--background-secondary__gradient);
  color: var(--background-primary);
  font-size: 1.2rem;
  font-family: "Inter";
  box-shadow: var(--button-shadow);
  height: fit-content;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  left: ${({ left }) => left || 0};
  width: ${({ width }) => width || "fit-content"};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};

  &:hover {
    box-shadow: var(--buttonshadow__hover);
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
  box-shadow: var(--button-shadow);
  cursor: pointer;

  &:hover {
    box-shadow: var(--buttonshadow__hover);
  }
`;

export { StyledTextButton, StyledIconButton };
