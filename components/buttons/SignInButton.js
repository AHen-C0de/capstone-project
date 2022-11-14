import styled from "styled-components";
import IconPlusTextButton from "./templates/IconPlusTextButton";
import { RiLoginBoxLine as SignInIcon } from "react-icons/ri";

export default function SignInButton({ onSignIn }) {
  return (
    <IconPlusTextButton
      padding="1rem"
      gap="1rem"
      borderRadius="0.5rem"
      fontWeight={600}
      onButtonClick={onSignIn}
    >
      <SignInIcon fill={"white"} size={30} />
      <span>Sign In</span>
    </IconPlusTextButton>
  );
}
