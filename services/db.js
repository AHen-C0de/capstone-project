import { nanoid } from "nanoid";

let shopping_list_DB = [
  {
    id: nanoid(),
    name: "Brot",
    checked: false,
  },
  {
    id: nanoid(),
    name: "Bananen",
    checked: false,
  },
  {
    id: nanoid(),
    name: "Marmelade",
    checked: false,
  },
  {
    id: nanoid(),
    name: "Milch",
    checked: true,
  },
  {
    id: nanoid(),
    name: "Salat",
    checked: true,
  },
];

export { shopping_list_DB };
