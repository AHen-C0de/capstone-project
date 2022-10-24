import styled from "styled-components";

export default function InputDropDown({ optionElements, ariaLabel, onAdd }) {
  return (
    <List>
      {optionElements.map((element) => (
        <li key={element.id}>
          <StyledButton
            aria-label={ariaLabel}
            onClick={() => onAdd(element.name)}
          >
            {element.name}
          </StyledButton>
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
