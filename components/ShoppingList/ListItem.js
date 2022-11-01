import styled from "styled-components";

export default function ListItem({ id, text, isChecked, onToggleItemChecked }) {
  return (
    <StyledListElement isChecked={isChecked}>
      <StyledCheckBox
        id={id}
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => onToggleItemChecked(id)}
      />
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;

  &:nth-child(even) {
    background-color: var(--list-secondary);
  }
`;

const StyledCheckBox = styled.input`
  margin-right: 0.5rem;
  transform: scale(1.5);
`;

const StyledLabel = styled.label`
  word-break: break-word;
  line-height: normal;
`;
