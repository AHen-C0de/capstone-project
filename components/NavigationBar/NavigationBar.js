import styled from "styled-components";

import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  return (
    <footer>
      <NavBar>
        <NavigationItem path="/">Home</NavigationItem>
        <NavigationItem path="/edit">Edit</NavigationItem>
      </NavBar>
    </footer>
  );
}

const NavBar = styled.nav`
  background-color: var(--background-secondary);
`;
