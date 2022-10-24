import { nanoid } from "nanoid";

const ITEMS_DB = [
  {
    id: nanoid(),
    name: "Brot",
  },
  {
    id: nanoid(),
    name: "Bananen",
  },
  {
    id: nanoid(),
    name: "Marmelade",
  },
  {
    id: nanoid(),
    name: "Milch",
  },
  {
    id: nanoid(),
    name: "Salat",
  },
  {
    id: nanoid(),
    name: "Kartofflen",
  },
  {
    id: nanoid(),
    name: "Reis",
  },
  {
    id: nanoid(),
    name: "Cornflakes",
  },
  {
    id: nanoid(),
    name: "Butter",
  },
  {
    id: nanoid(),
    name: "Nudeln",
  },
  {
    id: nanoid(),
    name: "Toast",
  },
  {
    id: nanoid(),
    name: "Tomaten",
  },
];

const SHOPPINGLIST_DB = [
  {
    id: nanoid(),
    item_id: ITEMS_DB[0].id,
    checked: false,
  },
  {
    id: nanoid(),
    item_id: ITEMS_DB[1].id,
    checked: false,
  },
  {
    id: nanoid(),
    item_id: ITEMS_DB[2].id,
    checked: false,
  },
  {
    id: nanoid(),
    item_id: ITEMS_DB[3].id,
    checked: true,
  },
  {
    id: nanoid(),
    item_id: ITEMS_DB[4].id,
    checked: true,
  },
];

function getShoppingListFromDB() {
  const shoppingItems = SHOPPINGLIST_DB.map((shoppingItem) => {
    const name = ITEMS_DB.find((item) => item.id === shoppingItem.item_id).name;
    return {
      id: shoppingItem.id,
      name: name,
      checked: shoppingItem.checked,
    };
  });
  return shoppingItems;
}

function getAllItemsFromDB() {
  return ITEMS_DB;
}

export { getShoppingListFromDB, getAllItemsFromDB };
