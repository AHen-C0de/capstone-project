import dbConnect from "../lib/dbConnect";
import ShoppingItem from "../models/ShoppingItem";

export async function getAllShoppingItems() {
  await dbConnect();

  const shoppingItems = await ShoppingItem.find().populate("item");

  const sanitizedShoppingItems = shoppingItems.map(({ id, item, checked }) => ({
    id: id,
    item: { id: item.id, name: item.name },
    checked: checked,
  }));

  return sanitizedShoppingItems;
}
