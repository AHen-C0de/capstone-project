import styled from "styled-components";

import NavigationItem from "./NavigationItem";

export default function NavigationBar() {
  return (
    <NavBar>
      <NavigationItem path="/">Home</NavigationItem>
      <NavigationItem path="/edit">Edit</NavigationItem>
    </NavBar>
  );
}

const NavBar = styled.nav`
  background-color: var(--color-primary);
`;
