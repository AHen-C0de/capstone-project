import { useState } from "react";
import { nanoid } from "nanoid";

import GlobalStyle from "../components/GlobalStyle";
import { shopping_list_DB } from "../services/db.js";

function MyApp({ Component, pageProps }) {
  const [shoppingListItems, setShoppingListItems] = useState(shopping_list_DB);

  function toggleItemChecked(id) {
    const updatedItems = shoppingListItems.filter((item) => item.id !== id);
    const toggledItem = shoppingListItems.find((item) => item.id === id);
    toggledItem.checked = !toggledItem.checked;
    updatedItems.unshift(toggledItem);

    setShoppingListItems(updatedItems);
  }

  function deleteItem(id) {
    setShoppingListItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  }

  function addItem(itemName) {
    setShoppingListItems((previousItems) => [
      ...previousItems,
      {
        id: nanoid(),
        name: itemName,
        checked: false,
      },
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        items={shoppingListItems}
        onToggleItemChecked={toggleItemChecked}
        onDelete={deleteItem}
        onAdd={addItem}
      />
    </>
  );
}

export default MyApp;
