import dbConnect from "../lib/dbConnect";
import ShoppingItem from "../models/ShoppingItem";

export async function getAllShoppingItems() {
  await dbConnect();

  const shoppingItems = await ShoppingItem.find().populate("name");

  const sanitizedShoppingItems = shoppingItems.map(({ id, name, checked }) => ({
    id: id,
    name: name.name,
    checked: checked,
  }));

  return sanitizedShoppingItems;
}
