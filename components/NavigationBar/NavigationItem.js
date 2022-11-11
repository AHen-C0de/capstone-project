import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavigationItem({ path, icon, padding }) {
  const { pathname } = useRouter();

  return (
    <Link href={path} passHref>
      <StyledLink active={pathname === path}>
        <IconBackground padding={padding}>{icon}</IconBackground>
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
  //padding: 0.3rem;
  padding: ${({ padding }) => padding};
  border-radius: 0.5rem;
  box-shadow: var(--button-shaddow);
`;
