import styled from "styled-components";
import { StyledTextButton } from "./buttonStyles";

export default function IconPlusText({
  children,
  padding,
  width,
  gap,
  left,
  onButtonClick,
}) {
  return (
    <StyledTextButton
      padding={padding}
      width={width}
      gap={gap}
      left={left}
      onClick={onButtonClick}
    >
      {children}
    </StyledTextButton>
  );
}
