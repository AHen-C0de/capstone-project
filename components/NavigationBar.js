import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const { pathname } = useRouter();

  return (
    <NavBar>
      <Link href="/" passHref>
        <StyledLink active={pathname === "/"}>Home</StyledLink>
      </Link>
      <Link href="/edit" passHref>
        <StyledLink active={pathname === "/edit"}>Edit</StyledLink>
      </Link>
    </NavBar>
  );
}

const NavBar = styled.nav`
  background-color: var(--color-primary);
`;

const StyledLink = styled.a`
  color: white;
  background-color: ${({ active }) => (active ? "aquamarine" : "none")};
`;
