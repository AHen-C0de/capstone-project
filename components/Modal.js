import styled from "styled-components";

export default function Modal({ children, onCloseModal, backgroundColor }) {
  return (
    <ModalBackground onClick={onCloseModal}>
      <ModalContainer
        onClick={(event) => event.stopPropagation()}
        backgroundColor={backgroundColor}
      >
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const ModalContainer = styled.article`
  width: 82%;
  max-width: 350px;
  position: absolute;
  border-radius: 1rem;
  justify-self: center;
  z-index: 20;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
`;
