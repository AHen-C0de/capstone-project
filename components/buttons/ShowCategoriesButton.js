import { StyledTextButton } from "./templates";
import { BiCategory as CategoryIcon } from "react-icons/bi";

export default function ShowCategoriesButton() {
  return (
    <StyledTextButton
      padding="0.3rem 0.5rem"
      width="100%"
      gap="0.5rem"
      left="0.2rem"
      margin="0 0 0.5rem 0"
      fontWeight={500}
    >
      <CategoryIcon alt="Kategorie Icon" size={30} />
      <p>Kategorien</p>
    </StyledTextButton>
  );
}
