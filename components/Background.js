import Image from "next/image";
import styled from "styled-components";
import image from "../public/assets/images/supermarket.jpg";

export default function Background({ opacity }) {
  return (
    <ImageWrapper opacity={opacity}>
      <Image
        src={image}
        alt="Supermarkt Hintergrundbild"
        layout="fill"
        objectFit="cover"
        priority
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
  filter: ${({ opacity }) => `grayscale() opacity(${opacity})`};
`;
