import styled from "styled-components";

import DropDown from "./DropDown";

export default function Input({
  id,
  text,
  ariaLabel,
  placeholderText,
  reference = null,
  value,
  onInput,
  onFocus,
  onBlur,
  dropDownItems,
  dropDownAriaLabel,
  onDropDownClick,
}) {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
      <StyledInput
        type="text"
        id={id}
        aria-label={ariaLabel}
        placeholder={placeholderText}
        maxLength="30"
        ref={reference} //used to set autofocus after submit
        value={value}
        onInput={onInput} //don't use onChange() -> it ignores some events!!!
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {dropDownItems.length > 0 && (
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
  background: url(/assets/icons/search.svg) no-repeat scroll 0.6rem 0.4rem;
  padding-left: 2.8rem;
  background-color: white;
`;
