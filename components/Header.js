import styled from "styled-components";
import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { RiLogoutBoxLine as SignOutIcon } from "react-icons/ri";
import { useSession, signOut } from "next-auth/react";

export default function Header({ children, isOverlappingAnimation }) {
  const animationRef = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("/public/assets/animations/shoppingCart.json"),
    });
    return () => instance.destroy();
  }, []);

  return (
    <StyledHeader>
      <AnimationContainer ref={animationRef} />
      <StyledHeadline isOverlappingAnimation={isOverlappingAnimation}>
        {children}
      </StyledHeadline>
      <button onClick={() => signOut()}>
        <SignOutIcon />
      </button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  background-color: var(--background-secondary);
  background: var(--background-secondary__gradient);
`;

const StyledHeadline = styled.h1`
  color: var(--background-primary);
  font-family: "Lily Script One";
  font-weight: normal;
  font-size: 1.7rem;
  margin-left: ${({ isOverlappingAnimation }) =>
    isOverlappingAnimation ? "2.4rem" : 0};
`;

const AnimationContainer = styled.div`
  position: absolute;
  height: 7rem;
  left: -1rem;
`;

/* --- LICENCE lottiefile (shoppingCart.json) ---*/

// Copyright © 2021 Design Barn Inc.
// Permission is hereby granted, free of charge, to any person obtaining a copy of the public animation files available for download at the LottieFiles site (“Files”) to download, reproduce, modify, publish, distribute, publicly display, and publicly digitally perform such Files, including for commercial purposes, provided that any display, publication, performance, or distribution of Files must contain (and be subject to) the same terms and conditions of this license. Modifications to Files are deemed derivative works and must also be expressly distributed under the same terms and conditions of this license. You may not purport to impose any additional or different terms or conditions on, or apply any technical measures that restrict exercise of, the rights granted under this license. This license does not include the right to collect or compile Files from LottieFiles to replicate or develop a similar or competing service.
// Use of Files without attributing the creator(s) of the Files is permitted under this license, though attribution is strongly encouraged. If attributions are included, such attributions should be visible to the end user.
// FILES ARE PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. EXCEPT TO THE EXTENT REQUIRED BY APPLICABLE LAW, IN NO EVENT WILL THE CREATOR(S) OF FILES OR DESIGN BARN, INC. BE LIABLE ON ANY LEGAL THEORY FOR ANY SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF THIS LICENSE OR THE USE OF SUCH FILES.
