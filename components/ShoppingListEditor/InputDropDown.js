import styled from "styled-components";

export default function InputDropDown({
  optionElements,
  ariaLabel,
  onAdd,
  hide,
}) {
  return (
    <List>
      {optionElements.map((element) => (
        <li key={element.id} hidden={hide}>
          <StyledButton
            aria-label={ariaLabel}
            onMouseDown={() => onAdd(element)}
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
