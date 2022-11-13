import dbConnect from "../lib/dbConnect";
import ShoppingItem from "../models/ShoppingItem";

export async function getShoppingItemsByUser(userEmail) {
  await dbConnect();

  const shoppingItems = await ShoppingItem.find({ userEmail: userEmail })
    .populate("item")
    .populate({ path: "item", populate: { path: "category" } });

  const sanitizedShoppingItems = shoppingItems.map(({ id, item, checked }) => ({
    id: id,
    name: item.name,
    item_id: item.id,
    category: item.category.id,
    checked: checked,
  }));

  return sanitizedShoppingItems;
}
