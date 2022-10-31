import styled from "styled-components";

import CheckInButton from "../Buttons/CheckInButton";
import DeleteButton from "../Buttons/DeleteButton";

export default function RecipeModal({ recipe }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <RecipeName>{recipe.name}</RecipeName>
        {recipe.variant && (
          <RecipeVariant>{`- ${recipeVariant} -`}</RecipeVariant>
        )}
        <RecipeItemsList>
          {recipe.items.map(({ id, name, isOnList }) => (
            <li key={id}>
              <RecipeItemWrapper>
                <RecipeItemName isOnList={isOnList}>{name}</RecipeItemName>
                {!isOnList && (
                  <DeleteButton id={id} onDelete={() => deleteRecipeItem(id)} />
                )}
                {isOnList && <Message>- Bereits gelistet -</Message>}
              </RecipeItemWrapper>
            </li>
          ))}
        </RecipeItemsList>
        <CheckInButton
          aria-label="zu Liste hizufügen"
          // onItemsAdd={handleAddRecipeItems}
        />
        <button
          aria-label="schließen"
          onClick={() => setIsShowRecipePopUp(false)}
        >
          Schließen
        </button>
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
  width: 80%;
  padding: 1rem;
  background-color: white;
  position: absolute;
  border-radius: 1rem;
  justify-self: center;
  z-index: 20;
`;

const Message = styled.p`
  color: red;
  font-size: 0.7rem;
`;

const RecipeName = styled.h2`
  font-family: "Lily Script One";
  font-size: 1.3rem;
`;

const RecipeVariant = styled.h3`
  font-style: italic;
  font-size: 1.1rem;
  font-family: "Lily Script One";
  margin-top: 0.2rem;
`;

const RecipeItemsList = styled.ul`
  margin: 1.5rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecipeItemName = styled.p`
  word-break: break-word;
  line-height: normal;
  color: ${({ isOnList }) => (isOnList ? "#B0B0B0" : "black")};
  font-style: ${({ isOnList }) => (isOnList ? "italic" : "normal")};
`;

const RecipeItemWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;
