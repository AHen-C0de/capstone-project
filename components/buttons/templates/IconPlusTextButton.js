import styled from "styled-components";
import { StyledTextButton } from "./buttonStyles";

export default function IconPlusText({
  children,
  padding,
  width,
  gap,
  left,
  borderRadius,
  fontWeight,
  onButtonClick,
}) {
  return (
    <StyledTextButton
      padding={padding}
      width={width}
      gap={gap}
      left={left}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      onClick={onButtonClick}
    >
      {children}
    </StyledTextButton>
  );
}
