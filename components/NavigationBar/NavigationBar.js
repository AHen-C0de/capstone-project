import styled from "styled-components";

import NavigationItem from "./NavigationItem";
import ListIcon from "../icons/ListIcon";
import WriteIcon from "../icons/WriteIcon";
import MoneyIcon from "../icons/MoneyIcon";

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
          padding="0.3rem"
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
          padding="0.3rem"
        ></NavigationItem>
        <NavigationItem
          path="/expenses"
          icon={
            <MoneyIcon
              fillColor="var(--background-secondary)"
              width="2.2rem"
              height="2.2rem"
            />
          }
          padding="0.2rem"
        ></NavigationItem>
      </NavBar>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: var(--background-secondary);
  background: var(--background-secondary__gradient);
`;

const NavBar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
