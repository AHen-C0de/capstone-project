import styled from "styled-components";

import DropDown from "./DropDown";

export default function Input({
  id,
  name,
  labelText,
  ariaLabel,
  placeholderText,
  showIcon = false,
  reference = null,
  value,
  onInput,
  onFocus,
  onBlur,
  dropDownItems = null,
  dropDownAriaLabel = null,
  onDropDownClick = null,
}) {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={id}>{labelText}</StyledLabel>
      <StyledInput
        type="text"
        id={id}
        name={name}
        aria-label={ariaLabel}
        placeholder={placeholderText}
        showIcon={showIcon}
        maxLength="30"
        ref={reference} //used to set autofocus after submit
        value={value}
        onInput={onInput} //don't use onChange() -> it ignores some events!!!
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {dropDownItems != null && dropDownItems.length > 0 && (
        <DropDown
          optionElements={dropDownItems}
          ariaLabel={dropDownAriaLabel}
          onButtonClick={onDropDownClick}
        />
      )}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledLabel = styled.label`
  align-self: start;
  color: var(--background-secondary);
  font-family: "Lily Script One";
  font-size: 1.5rem;
  left: 2rem;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  width: 90%;
  border-radius: 2rem;
  border: none;
  font-family: "Inter";
  background: ${({ showIcon }) =>
    showIcon
      ? "url(/assets/icons/search.svg) no-repeat scroll 0.6rem 0.4rem"
      : "none"};
  padding-left: ${({ showIcon }) => (showIcon ? "2.8rem" : "1rem")};
  background-color: white;
`;
