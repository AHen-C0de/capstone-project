import { StyledTextButton } from "./templates";
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";

export default function AllItemButton() {
  return (
    <StyledTextButton
      padding="0.3rem 0.5rem"
      width="fit-content"
      gap="0.2rem"
      left="0.2rem"
      fontWeight={500}
    >
      <ArrowBackIcon alt="Pfeil Icon" size={30} />
      <p>Alle Produkte</p>
    </StyledTextButton>
  );
}
