import { useState } from "react";

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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        items={shoppingListItems}
        onToggleItemChecked={toggleItemChecked}
        onDelete={deleteItem}
      />
    </>
  );
}

export default MyApp;
