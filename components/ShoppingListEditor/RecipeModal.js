import styled from "styled-components";

import CloseButton from "../buttons/CloseButton";
import DeleteButton from "../buttons/DeleteButton";
import IconPlusTextButton from "../buttons/IconPlusTextButton";
import { GiCheckMark as CheckIcon } from "react-icons/gi";

export default function RecipeModal({ recipe, onAdd, onDelete, onCloseModal }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClose={onCloseModal} absolutePositionRight="17px" />
        <RecipeName>{recipe.name}</RecipeName>
        {recipe.variant && (
          <RecipeVariant>{`- ${recipe.variant} -`}</RecipeVariant>
        )}
        <RecipeItemsList>
          {recipe.items.map(({ id, name, isOnList }) => (
            <li key={id}>
              <RecipeItemWrapper>
                <RecipeItemName isOnList={isOnList}>{name}</RecipeItemName>
                {!isOnList && (
                  <DeleteButton id={id} onDelete={() => onDelete(recipe, id)} />
                )}
                {isOnList && <Message>- Bereits gelistet -</Message>}
              </RecipeItemWrapper>
            </li>
          ))}
        </RecipeItemsList>
        <IconPlusTextButton
          aria-label="Items zu Liste hizufügen"
          padding="0.3rem 0.8rem"
          margin="0 auto"
          gap="0.7rem"
          onButtonClick={() => onAdd(recipe)}
        >
          <p>Check-In</p>
          <CheckIcon alt="Checkmark Icon" />
        </IconPlusTextButton>
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
`;

const ModalContainer = styled.article`
  width: 82%;
  max-width: 350px;
  padding: 1.2rem;
  background-color: white;
  position: absolute;
  border-radius: 1rem;
  justify-self: center;
  z-index: 20;
`;

const Message = styled.p`
  color: red;
  font-size: 1rem;
`;

const RecipeName = styled.h2`
  font-family: "Lily Script One";
  font-size: 1.5rem;
`;

const RecipeVariant = styled.h3`
  font-style: italic;
  font-size: 1.3rem;
  font-family: "Lily Script One";
  margin-top: 0.2rem;
`;

const RecipeItemsList = styled.ul`
  margin: 2rem 0 1.5rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecipeItemName = styled.p`
  word-break: break-word;
  line-height: normal;
  font-weight: bold;
  font-family: "Handlee";
  font-size: 1.3rem;
  color: ${({ isOnList }) => (isOnList ? "#B0B0B0" : "#000000")};
  font-style: ${({ isOnList }) => (isOnList ? "italic" : "normal")};
`;

const RecipeItemWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;
