import styled from "styled-components";

export default function ListItem({ id, text, isChecked, onToggle }) {
  return (
    <StyledListElement isChecked={isChecked}>
      <StyledCheckBox
        id={id}
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => onToggle(id)}
      />
      <label htmlFor={id}>{text}</label>
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;

const StyledCheckBox = styled.input`
  margin-right: 0.5rem;
`;
