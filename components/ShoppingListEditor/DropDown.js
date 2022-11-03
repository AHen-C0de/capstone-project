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
  margin-bottom: 0.08rem;
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: var(--list-secondary);
  padding: 0.3rem;
  border: solid 1px var(--list-primary);
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans";
`;

const ElementText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
`;

const VariantText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;
