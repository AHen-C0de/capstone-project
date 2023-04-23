import styled from "styled-components";

import { StyledTextButton } from "./templates";
import FinishIcon from "../icons/FinishIcon";

export default function FinishButton({ onFinish }) {
  return (
    <StyledTextButton
      padding="0.3rem 0.5rem"
      width="fit-content"
      gap="0.5rem"
      left="0.2rem"
      fontWeight={500}
      onClick={onFinish}
    >
      <FinishIcon
        fillColor="var(--background-primary)"
        height={30}
        alt="Liste-abgehakt-Icon"
      />
      <StyledParagraph>Einkauf beenden</StyledParagraph>
    </StyledTextButton>
  );
}

const StyledParagraph = styled.p`
  white-space: nowrap;
`;
