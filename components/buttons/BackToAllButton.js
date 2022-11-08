import styled from "styled-components";
// import Image from "next/image";
// import searchIcon from "/public/assets/icons/search.svg";
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";

export default function BackToAllButton() {
  return (
    <StyledButton>
      <ArrowBackIcon />
      <p>Alle Items</p>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: relative;
  left: 0.2rem;
  background-color: var(--background-secondary__dark);
  color: var(--background-primary);
  border-radius: 0.2rem;
  padding: 0.3rem 0.7rem 0.3rem 0.5rem;
  font-size: 1.3rem;
  font-family: "Noto Sans";
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  box-shadow: var(--button-shaddow);

  &:hover {
    background-color: var(--background-secondary__hover);
  }
`;
