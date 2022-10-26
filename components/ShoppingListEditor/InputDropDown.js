import styled from "styled-components";

export default function InputDropDown({
  optionElements,
  ariaLabel,
  onAdd,
  onReset,
}) {
  function handleClick(element) {
    onAdd(element);
    onReset();
  }

  return (
    <List>
      {optionElements.map((element) => (
        <li key={element.id}>
          <StyledButton
            aria-label={ariaLabel}
            onMouseDown={() => handleClick(element)} //use onMouseDown to trigger click BEFORE onBlur effect on input field triggers
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
