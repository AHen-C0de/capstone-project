import styled from "styled-components";
//import { FaSearch as SearchIcon } from "react-icons/fa";
import Image from "next/image";
import searchIcon from "/public/assets/icons/search.svg";

export default function CheckInButton() {
  return (
    <StyledButton>
      <Image src={searchIcon} alt="Lupe Icon" />
      <p>Suche Kategorie</p>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--background-secondary__dark);
  color: var(--background-primary);
  border-radius: 0.2rem;
  padding: 0.3rem;
  padding-right: 0.4rem;
  font-size: 1.3rem;
  font-family: "Noto Sans";
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: var(--button-shaddow);

  &:hover {
    background-color: var(--background-secondary__hover);
  }
`;
