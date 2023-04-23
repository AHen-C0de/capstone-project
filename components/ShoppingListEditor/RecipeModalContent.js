import styled from "styled-components";

import DeleteButton from "../buttons/DeleteButton";
import { StyledTextButton } from "../buttons/templates";
import { GiCheckMark as CheckIcon } from "react-icons/gi";

export default function RecipeModalContent({ recipe, onAdd, onDelete }) {
  return (
    <ModalWrapper>
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
              {isOnList && <Message>- gelistet -</Message>}
            </RecipeItemWrapper>
          </li>
        ))}
      </RecipeItemsList>
      <ButtonWrapper>
        <StyledTextButton
          aria-label="Items zu Liste hizufügen"
          padding="0.3rem 0.8rem"
          gap="0.7rem"
          onClick={() => onAdd(recipe)}
        >
          <p>Check-In</p>
          <CheckIcon alt="Checkmark Icon" />
        </StyledTextButton>
      </ButtonWrapper>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  padding: 1.2rem;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
