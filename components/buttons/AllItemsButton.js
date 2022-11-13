import IconPlusTextButton from "./templates/IconPlusTextButton";
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";

export default function AllItemButton() {
  return (
    <IconPlusTextButton
      padding="0.2rem 0.2rem 0.2rem 0rem"
      width="11rem"
      gap="0.2rem"
      left="0.2rem"
      borderRadius="0.3rem"
      fontWeight={500}
    >
      <ArrowBackIcon alt="Pfeil Icon" size={30} />
      <p>Alle Produkte</p>
    </IconPlusTextButton>
  );
}
