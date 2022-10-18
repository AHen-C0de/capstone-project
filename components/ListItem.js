import styled from "styled-components";

export default function ListItem({ name, isChecked }) {
  return (
    <li>
      <StyledLabel isChecked={isChecked}>
        <input type="checkbox" defaultChecked={isChecked} />
        {name}
      </StyledLabel>
    </li>
  );
}

const StyledLabel = styled.label`
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;
