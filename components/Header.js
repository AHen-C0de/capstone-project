import styled from "styled-components";

export default function Header({ children }) {
  return (
    <header>
      <StyledHeadline>{children}</StyledHeadline>
    </header>
  );
}

const StyledHeadline = styled.h1`
  background-color: var(--color-primary);
  color: white;
  padding: 0.6rem;
  font-family: "Lily Script One";
  font-weight: normal;
  text-align: center;
`;
