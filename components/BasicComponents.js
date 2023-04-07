import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 400px;
  padding: 1.2rem 1.5rem;
  height: calc(100vh - 8rem);
  gap: ${({ gap }) => (gap ? gap : "1rem")};
`;

const SeparatorLine = styled.div`
  width: 70%;
  border: solid 1px var(--background-secondary);
  background-color: var(--background-secondary);
  border-radius: 1rem;
  margin: 0.2rem 0 1rem 0;
`;

const ButtonWrapper = styled.div`
  width: fit-content;
`;

export { ContentWrapper, SeparatorLine, ButtonWrapper };
