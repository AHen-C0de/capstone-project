import styled from "styled-components";
import { useState } from "react";

import ListContainer from "../ListContainer";
import Form from "./Form";
import CheckInButton from "../Buttons/CheckInButton";
import DeleteButton from "../Buttons/DeleteButton";

export default function ShoppingListEditor({ listItems, onDelete, onAdd }) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeVariant, setRecipeVariant] = useState("");
  const [recipeItems, setRecipeItems] = useState([]);
  const [isShowRecipePopUp, setIsShowRecipePopUp] = useState(false);

  function handleAddRecipeItems() {
    recipeItems.forEach((recipeItem) => {
      if (!recipeItem.isOnList) {
        onAdd({ id: recipeItem.id, name: recipeItem.name });
      }
    });
    setIsShowRecipePopUp(false);
    setRecipeInput("");
    inputRef.current.focus();
  }

  function openPopUp(recipe) {
    setIsShowRecipePopUp(true);
    const recipeItems = allItems.filter((item) =>
      recipe.item_ids.includes(item.id)
    );
    //add available attr. whether recipe item is already on the shopping list
    const usedItemIds = listItems.map((usedItem) => usedItem.item_id);
    const recipeItemsAndStatus = recipeItems.map((recipeItem) =>
      usedItemIds.includes(recipeItem.id)
        ? { ...recipeItem, isOnList: true }
        : { ...recipeItem, isOnList: false }
    );
    setRecipeName(recipe.name);
    setRecipeVariant(recipe.variant);
    setRecipeItems(recipeItemsAndStatus);
  }

  function deleteRecipeItem(id) {
    setRecipeItems(recipeItems.filter((item) => item.id !== id));
  }

  return (
    <>
      <ListContainer isBlur={isShowRecipePopUp}>
        <Form listItems={listItems} />
        <Line />
        <List>
          {listItems.map(({ id, name }) => (
            <ListItemContent key={id}>
              <ItemName>{name}</ItemName>
              <ItemDeleteButton
                aria-label="lösche Item"
                onClick={() => onDelete(id)}
              >
                Löschen
              </ItemDeleteButton>
            </ListItemContent>
          ))}
        </List>
      </ListContainer>
      {isShowRecipePopUp && (
        <Modal>
          <RecipePopUp>
            <RecipeName>{recipeName}</RecipeName>
            {recipeVariant && (
              <RecipeVariant>{`- ${recipeVariant} -`}</RecipeVariant>
            )}
            <RecipeItemsList>
              {recipeItems.map(({ id, name, isOnList }) => (
                <li key={id}>
                  <RecipeItemWrapper>
                    <RecipeItemName isOnList={isOnList}>{name}</RecipeItemName>
                    {!isOnList && (
                      <DeleteButton
                        id={id}
                        onDelete={() => deleteRecipeItem(id)}
                      />
                    )}
                    {isOnList && <Message>- Bereits gelistet -</Message>}
                  </RecipeItemWrapper>
                </li>
              ))}
            </RecipeItemsList>
            <CheckInButton
              aria-label="zu Liste hizufügen"
              onItemsAdd={handleAddRecipeItems}
            />
            <button
              aria-label="schließen"
              onClick={() => setIsShowRecipePopUp(false)}
            >
              Schließen
            </button>
          </RecipePopUp>
        </Modal>
      )}
    </>
  );
}

const Line = styled.div`
  width: 90%;
  height: 0.2rem;
  border-radius: 1rem;
  background-color: black;
  align-self: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItemContent = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.p`
  word-break: break-word;
  line-height: normal;
`;

const ItemDeleteButton = styled.button`
  background-color: red;
  height: 1.5rem;
`;

const Modal = styled.div`
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

const RecipePopUp = styled.article`
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
