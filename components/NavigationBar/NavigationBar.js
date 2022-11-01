import styled from "styled-components";

import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  return (
    <StyledFooter>
      <NavBar>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/edit">Edit</NavigationItem>
      </NavBar>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 3rem;
  background-color: var(--background-secondary);
`;

const NavBar = styled.nav``;
