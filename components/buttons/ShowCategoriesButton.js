import styled from "styled-components";

import IconPlusTextButton from "./templates/IconPlusTextButton";
import { BiCategory as CategoryIcon } from "react-icons/bi";

export default function ShowCategoriesButton() {
  return (
    <IconPlusTextButton
      padding="0.3rem"
      width={"10.5rem"}
      gap="0.7rem"
      left={"0.2rem"}
    >
      <CategoryIcon alt="Kategorie Icon" size={30} />
      <p>Kategorien</p>
    </IconPlusTextButton>
  );
}
