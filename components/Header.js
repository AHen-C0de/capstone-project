import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <StyledHeadline>{children}</StyledHeadline>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  background-color: var(--background-secondary);
`;

const StyledHeadline = styled.h1`
  color: white;
  font-family: "Lily Script One";
  font-weight: normal;
`;
