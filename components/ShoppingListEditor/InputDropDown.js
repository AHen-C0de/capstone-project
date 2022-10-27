import styled from "styled-components";

export default function InputDropDown({
  optionElements,
  ariaLabel,
  onAddItem,
}) {
  return (
    <List>
      {optionElements.map((element) => (
        <li key={element.id}>
          <StyledButton
            aria-label={ariaLabel}
            onMouseDown={() => onAddItem(element)} //use onMouseDown to trigger click BEFORE onBlur effect on input field triggers
          >
            <ElementText>{element.name}</ElementText>
            {element.hasOwnProperty("variant") && element.variant !== "" && (
              <VariantText>{`- ${element.variant} -`}</VariantText>
            )}
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

const ElementText = styled.p`
  font-size: 1rem;
`;

const VariantText = styled.p`
  font-style: italic;
`;
