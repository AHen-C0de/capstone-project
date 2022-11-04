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
    id: "6363e33673267e78f0e55dd3",
    name: "Milch",
  },
  {
    id: nanoid(),
    name: "Salat",
  },
  {
    id: "6363e37b73267e78f0e55dd5",
    name: "Kartoffeln",
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
    name: "Schinkenwürfel",
  },
  {
    id: nanoid(),
    name: "Zwiebeln",
  },
  {
    id: nanoid(),
    name: "Petersilie",
  },
  {
    id: nanoid(),
    name: "Paprika",
  },
  {
    id: nanoid(),
    name: "Tomaten",
  },
  {
    id: nanoid(),
    name: "Toast",
  },
  {
    id: nanoid(),
    name: "Couscous",
  },
  {
    id: nanoid(),
    name: "Zucchini",
  },
  {
    id: nanoid(),
    name: "Mozzarella",
  },
  {
    id: nanoid(),
    name: "Hackfleisch",
  },
  {
    id: nanoid(),
    name: "Bratensoße",
  },
  {
    id: nanoid(),
    name: "Käse",
  },
  {
    id: nanoid(),
    name: "Gemüsebrühe",
  },
];

const RECIPES_DB = [
  {
    id: nanoid(),
    name: "Bratkartoffeln",
    variant: "original",
    item_ids: [
      "6363e37b73267e78f0e55dd5",
      "6363e3d373267e78f0e55dda",
      "6363e3e573267e78f0e55ddb",
      "6363e3fa73267e78f0e55ddc",
    ],
  },
  {
    id: nanoid(),
    name: "Bratkartoffeln",
    variant: "vegetarisch",
    item_ids: [
      ITEMS_DB.find((item) => item.name === "Kartoffeln").id,
      ITEMS_DB.find((item) => item.name === "Paprika").id,
      ITEMS_DB.find((item) => item.name === "Zwiebeln").id,
      ITEMS_DB.find((item) => item.name === "Tomaten").id,
    ],
  },
  {
    id: nanoid(),
    name: "Couscous",
    variant: "vegetarisch",
    item_ids: [
      ITEMS_DB.find((item) => item.name === "Couscous").id,
      ITEMS_DB.find((item) => item.name === "Tomaten").id,
      ITEMS_DB.find((item) => item.name === "Zucchini").id,
      ITEMS_DB.find((item) => item.name === "Paprika").id,
      ITEMS_DB.find((item) => item.name === "Mozzarella").id,
      ITEMS_DB.find((item) => item.name === "Gemüsebrühe").id,
    ],
  },
  {
    id: nanoid(),
    name: "Gefüllte Paprika",
    variant: "",
    item_ids: [
      ITEMS_DB.find((item) => item.name === "Paprika").id,
      ITEMS_DB.find((item) => item.name === "Hackfleisch").id,
      ITEMS_DB.find((item) => item.name === "Kartoffeln").id,
      ITEMS_DB.find((item) => item.name === "Bratensoße").id,
      ITEMS_DB.find((item) => item.name === "Käse").id,
    ],
  },
];

const SHOPPINGLIST_DB = [
  {
    id: nanoid(),
    item_id: "6363e37b73267e78f0e55dd5",
    checked: false,
  },
  {
    id: nanoid(),
    item_id: "6363e33673267e78f0e55dd3",
    checked: true,
  },
];

function getShoppingListFromDB() {
  const shoppingItems = SHOPPINGLIST_DB.map((shoppingItem) => {
    const name = ITEMS_DB.find((item) => item.id === shoppingItem.item_id).name;
    return { ...shoppingItem, name: name };
  });
  return shoppingItems;
}

export { getShoppingListFromDB };
