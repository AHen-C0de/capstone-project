import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavigationItem({ path, icon }) {
  const { pathname } = useRouter();

  return (
    <Link href={path} passHref>
      <StyledLink active={pathname === path}>
        <IconBackground>{icon}</IconBackground>
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  background-color: ${({ active }) =>
    active ? "var(--list-primary)" : "none"};
  padding: 0.3rem;
  border-radius: 0.5rem;
`;

const IconBackground = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--background-primary);
  padding: 0.3rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
