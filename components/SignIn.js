import styled from "styled-components";
import { signIn } from "next-auth/react";
import SignInButton from "../components/buttons/SignInButton";

export default function SignIn({ onSignIn }) {
  return (
    <Wrapper>
      <SignInButton onSignIn={onSignIn} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
