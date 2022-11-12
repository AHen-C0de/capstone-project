import styled from "styled-components";

import IconPlusTextButton from "./templates/IconPlusTextButton";
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";

export default function AllItemButton() {
  return (
    <IconPlusTextButton padding="0.3rem" width={"10.5rem"} gap="1.1rem">
      <ArrowBackIcon alt="Pfeil Icon" size={30} />
      <p>Alle Items</p>
    </IconPlusTextButton>
  );
}
