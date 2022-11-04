import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import GlobalStyle from "/components/GlobalStyle";

function MyApp({ Component, pageProps, shoppingItems }) {
  //const [shoppingListItems, setShoppingListItems] = useState([]);

  // //set state via useEffect(), instead of setting it directly in useState,
  // //because of "React Hydration Error";
  // //also see "https://nextjs.org/docs/messages/react-hydration-error"
  // useEffect(() => setShoppingListItems(shoppingItems), []);

  function toggleItemChecked(id) {
    //separate to-toggle-item from the array, to put it at first idx after being changed
    //this will render toggled item on top of the list after mapping
    const unchangedItems = shoppingListItems.filter((item) => item.id !== id);
    const toggledItem = shoppingListItems.find((item) => item.id === id);

    const updatedList = [
      { ...toggledItem, checked: !toggledItem.checked },
      ...unchangedItems,
    ];
    setShoppingListItems(updatedList);
  }

  function deleteItem(id) {
    setShoppingListItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  }

  function addItem(item) {
    setShoppingListItems((previousItems) => [
      ...previousItems,
      {
        id: nanoid(),
        item_id: item.id,
        checked: false,
        name: item.name,
      },
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        //listItems={shoppingListItems}
        onToggleItemChecked={toggleItemChecked}
        onDelete={deleteItem}
        onAdd={addItem}
      />
    </>
  );
}

export default MyApp;
