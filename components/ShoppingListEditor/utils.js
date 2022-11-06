//open drop down when typing into input field
function handleInput(event, inputSetter, dropDownSetter, inputMatcher) {
  const inputString = event.target.value;
  inputSetter(inputString);
  triggerDropDown(inputString, dropDownSetter, inputMatcher);
}

//evoke rendering drop down buttons for elements that match input
function triggerDropDown(inputString, dropDownSetter, inputMatcher) {
  const matchedElements = inputMatcher(inputString);
  dropDownSetter(matchedElements);
}

export { handleInput, triggerDropDown };
