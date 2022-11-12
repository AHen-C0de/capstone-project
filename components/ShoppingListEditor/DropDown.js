import styled from "styled-components";

export default function DropDown({
  optionElements, //= available items, when used for item input & recipes when used for recipe input
  ariaLabel,
  onButtonClick,
}) {
  return (
    <List>
      {optionElements.map((element) => (
        <ListElement key={element.id}>
          <StyledButton
            aria-label={ariaLabel}
            onMouseDown={() => onButtonClick(element)} //use onMouseDown to trigger click BEFORE onBlur effect on input field triggers
          >
            <ElementText>{element.name}</ElementText>
            {element.hasOwnProperty("variant") && element.variant !== "" && (
              <VariantText>{`- ${element.variant} -`}</VariantText>
            )}
          </StyledButton>
        </ListElement>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 90%;
`;

const ListElement = styled.li`
  margin-bottom: 0.1rem;
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: var(--list-secondary);
  background: var(--list-secondary__gradient);
  padding: 0.4rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: var(--button-shaddow);
  font-family: "Inter";
  font-weight: 400;

  &:hover {
    box-shadow: var(--buttonshaddow__hover);
  }
`;

const ElementText = styled.p`
  font-size: 1.3rem;
`;

const VariantText = styled.p`
  margin-top: 0.1rem;
  font-size: 1.2rem;
  font-style: italic;
`;
