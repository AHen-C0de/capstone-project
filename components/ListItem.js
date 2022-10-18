import styled from "styled-components";

export default function ListItem({ id, text, isChecked, onToggle }) {
  return (
    <StyledListElement isChecked={isChecked}>
      <StyledCheckBox
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => onToggle(id)}
      />
      {text}
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;

const StyledCheckBox = styled.input`
  margin-right: 0.5rem;
`;
