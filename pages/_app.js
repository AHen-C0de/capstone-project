import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import GlobalStyle from "/components/GlobalStyle";

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} onAdd={addItem} />
    </>
  );
}

export default MyApp;
