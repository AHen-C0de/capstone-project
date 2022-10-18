import styled from "styled-components";

export default function ListItem({ text, isChecked }) {
  return (
    <StyledListElement isChecked={isChecked}>
      <input type="checkbox" defaultChecked={isChecked} />
      {text}
    </StyledListElement>
  );
}

const StyledListElement = styled.li`
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;
