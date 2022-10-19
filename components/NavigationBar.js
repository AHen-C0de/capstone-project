import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavigationBar() {
  return (
    <NavBar>
      <Link href="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/edit" passHref>
        <StyledLink>Edit</StyledLink>
      </Link>
    </NavBar>
  );
}

const NavBar = styled.nav`
  background-color: #0b7d54;
`;

const StyledLink = styled.a`
  background-color: red;
`;
