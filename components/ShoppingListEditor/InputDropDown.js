import styled from "styled-components";

export default function InputDropDown({ optionElements }) {
  return (
    <List>
      {optionElements.map(({ id, name }) => (
        <li key={id}>
          <StyledButton>{name}</StyledButton>
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 1rem;
  list-style: none;
`;

const StyledButton = styled.button`
  width: 100%;
`;
