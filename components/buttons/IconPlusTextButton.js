import styled from "styled-components";
import StyledButton from "./StyledButton";

export default function IconPlusText({
  children,
  padding,
  margin,
  gap,
  left,
  onButtonClick,
}) {
  return (
    <StyledButton
      padding={padding}
      margin={margin}
      gap={gap}
      left={left}
      onClick={onButtonClick}
    >
      {children}
    </StyledButton>
  );
}
