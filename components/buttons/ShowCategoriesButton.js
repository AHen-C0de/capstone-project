import IconPlusTextButton from "./templates/IconPlusTextButton";
import { BiCategory as CategoryIcon } from "react-icons/bi";

export default function ShowCategoriesButton() {
  return (
    <IconPlusTextButton
      padding="0.2rem 0.2rem 0.2rem 0rem"
      width="11rem"
      gap="0.7rem"
      left="0.2rem"
      borderRadius="0.3rem"
      fontWeight={500}
    >
      <CategoryIcon alt="Kategorie Icon" size={30} />
      <p>Kategorien</p>
    </IconPlusTextButton>
  );
}
