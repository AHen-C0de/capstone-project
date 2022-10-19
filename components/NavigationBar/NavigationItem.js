import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavigationItem({ path, children }) {
  const { pathname } = useRouter();

  return (
    <Link href={path} passHref>
      <StyledLink active={pathname === path}>{children}</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  color: white;
  background-color: ${({ active }) => (active ? "aquamarine" : "none")};
`;
