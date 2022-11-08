import styled from "styled-components";
import { useState, useRef } from "react";

import ListContainer from "../ListContainer";
import Form from "./Form";
import List from "./List";
import RecipeModal from "./RecipeModal";

export default function ShoppingListEditor({
  listItems,
  items,
  recipes,
  onDelete,
  onAdd,
}) {
  //rendering
  const [clickedRecipe, setClickedRecipe] = useState({});
  const [isShowRecipeModal, setIsShowRecipeModal] = useState(false);
  const itemInputRef = useRef();

  function handleAddRecipeItems(recipe) {
    recipe.items.forEach((recipeItem) => {
      if (!recipeItem.isOnList) {
        onAdd({ id: recipeItem.id, name: recipeItem.name });
      }
    });
    setIsShowRecipeModal(false);
    itemInputRef.current.focus();
  }

  function openModal(recipe) {
    setIsShowRecipeModal(true);
    //add isOnList attr. whether recipe item is already on the shopping list
    const usedItemIds = listItems.map((shoppingItem) => shoppingItem.item.id);
    const itemsPlusStatus = recipe.items.map((recipeItem) =>
      usedItemIds.includes(recipeItem.id)
        ? { ...recipeItem, isOnList: true }
        : { ...recipeItem, isOnList: false }
    );
    const recipePlusStatus = {
      ...recipe,
      items: itemsPlusStatus,
    };
    setClickedRecipe(recipePlusStatus);
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
      <ListContainer isBlur={isShowRecipeModal}>
        <Form
          items={items}
          recipes={recipes}
          listItems={listItems}
          onAdd={onAdd}
          onOpenModal={openModal}
          itemInputRef={itemInputRef}
        />
        <Line />
        <List listItems={listItems} onDelete={onDelete} />
      </ListContainer>
      {isShowRecipeModal && (
        <RecipeModal
          recipe={clickedRecipe}
          onAdd={handleAddRecipeItems}
          onDelete={deleteRecipeItem}
          onCloseModal={() => setIsShowRecipeModal(false)}
        />
      )}
    </>
  );
}

const Line = styled.hr`
  width: 90%;
  height: 0.2rem;
  border-radius: 1rem;
  background-color: #000000;
  align-self: center;
  margin: 1.3rem 0;
  border: none;
`;
