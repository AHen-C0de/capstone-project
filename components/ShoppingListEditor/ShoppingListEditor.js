import styled from "styled-components";
import { useState, useRef } from "react";

import ListContainer from "../ListContainer";
import Form from "./Form";
import List from "./List";
import RecipeModal from "./RecipeModal";
import { getAllItemsFromDB, getRecipesFromDB } from "../../services/db.js";

export default function ShoppingListEditor({ listItems, onDelete, onAdd }) {
  //DB request
  const [allItems, setAllItems] = useState(getAllItemsFromDB);
  const [recipes, setRecipes] = useState(getRecipesFromDB);
  //rendering
  const [clickedRecipe, setClickedRecipe] = useState({});
  const [isShowRecipePopUp, setIsShowRecipePopUp] = useState(false);
  const itemInputRef = useRef();

  function handleAddRecipeItems(recipe) {
    recipe.items.forEach((recipeItem) => {
      if (!recipeItem.isOnList) {
        onAdd({ id: recipeItem.id, name: recipeItem.name });
      }
    });
    setIsShowRecipePopUp(false);
    itemInputRef.current.focus();
  }

  function openModal(recipe) {
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

    const detailedRecipe = {
      name: recipe.name,
      variant: recipe.variant,
      items: recipeItemsAndStatus,
    };
    setClickedRecipe(detailedRecipe);
  }

  function deleteRecipeItem(recipe, id) {
    const filteredItems = recipe.items.filter((item) => item.id !== id);
    setClickedRecipe((previousRecipe) => ({
      ...previousRecipe,
      items: filteredItems,
    }));
  }

  return (
    <>
      <ListContainer isBlur={isShowRecipePopUp}>
        <Form
          allItems={allItems}
          recipes={recipes}
          listItems={listItems}
          onAdd={onAdd}
          onOpenModal={openModal}
          itemInputRef={itemInputRef}
        />
        <Line />
        <List listItems={listItems} onDelete={onDelete} />
      </ListContainer>
      {isShowRecipePopUp && (
        <RecipeModal
          recipe={clickedRecipe}
          onAdd={handleAddRecipeItems}
          onDelete={deleteRecipeItem}
          onCloseModal={() => setIsShowRecipePopUp(false)}
        />
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
