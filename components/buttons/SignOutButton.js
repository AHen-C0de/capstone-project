import styled from "styled-components";
import { RiLogoutBoxLine as SignOutIcon } from "react-icons/ri";

export default function SignOutButton({ onSignOut }) {
  return (
    <StyledButton onClick={onSignOut}>
      <SignOutIcon fill={"white"} size={30} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem 0.3rem;
`;
