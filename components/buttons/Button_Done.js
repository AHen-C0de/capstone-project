import styled from "styled-components";

export default function Button_Done() {
  return (
    <StyledButton>
      <StyledSVG
        viewBox="0 0 35 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6069 1.01398C30.8189 0.797745 31.0718 0.62596 31.3509 0.508687C31.6301 0.391414 31.9298 0.331009 32.2326 0.331009C32.5354 0.331009 32.8351 0.391414 33.1142 0.508687C33.3934 0.62596 33.6463 0.797745 33.8582 1.01398C34.7464 1.91143 34.7588 3.36163 33.8893 4.27461L15.5273 25.9811C15.3188 26.21 15.0659 26.394 14.7838 26.5218C14.5018 26.6496 14.1967 26.7185 13.8871 26.7243C13.5775 26.7301 13.27 26.6727 12.9834 26.5556C12.6968 26.4385 12.437 26.2641 12.2201 26.0432L1.04704 14.721C0.616132 14.2816 0.374756 13.6907 0.374756 13.0752C0.374756 12.4597 0.616132 11.8688 1.04704 11.4293C1.25897 11.2131 1.51191 11.0413 1.79105 10.9241C2.07019 10.8068 2.36992 10.7464 2.67269 10.7464C2.97547 10.7464 3.2752 10.8068 3.55434 10.9241C3.83348 11.0413 4.08642 11.2131 4.29835 11.4293L13.7759 21.0342L30.5448 1.0823C30.5641 1.0583 30.5849 1.03549 30.6069 1.01398Z"
          fill="white"
        />
      </StyledSVG>
      <Text>Fertig!</Text>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
`;

const StyledSVG = styled.svg`
  height: 1.3rem;
`;

const Text = styled.p`
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
`;
