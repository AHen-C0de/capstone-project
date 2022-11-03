import styled from "styled-components";

import NavigationItem from "./NavigationItem";
import ListIcon from "../icons/ListIcon";
import WriteIcon from "../icons/WriteIcon";

export default function NavigationBar() {
  return (
    <StyledFooter>
      <NavBar>
        <NavigationItem
          path="/"
          icon={
            <ListIcon
              fillColor="var(--background-secondary)"
              width="2rem"
              height="2rem"
            />
          }
        ></NavigationItem>
        <NavigationItem
          path="/edit"
          icon={
            <WriteIcon
              fillColor="var(--background-secondary)"
              width="2rem"
              height="2rem"
            />
          }
        >
          Edit
        </NavigationItem>
      </NavBar>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: var(--background-secondary);
`;

const NavBar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
