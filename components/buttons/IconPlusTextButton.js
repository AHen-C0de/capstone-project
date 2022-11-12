import styled from "styled-components";
import { StyledTextButton } from "./buttonStyles";

export default function IconPlusText({
  children,
  padding,
  margin,
  gap,
  left,
  onButtonClick,
}) {
  return (
    <StyledTextButton
      padding={padding}
      margin={margin}
      gap={gap}
      left={left}
      onClick={onButtonClick}
    >
      {children}
    </StyledTextButton>
  );
}
