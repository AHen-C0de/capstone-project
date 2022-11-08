import dbConnect from "../lib/dbConnect";
import ShoppingItem from "../models/ShoppingItem";

export async function getAllShoppingItems() {
  await dbConnect();

  const shoppingItems = await ShoppingItem.find().populate("item");

  const sanitizedShoppingItems = shoppingItems.map(({ id, item, checked }) => ({
    id: id,
    item: {
      id: item.id,
      name: item.name,
      category: item.category.name,
    },
    checked: checked,
  }));

  return sanitizedShoppingItems;
}

export async function getCurrentCategories() {
  await dbConnect();

  const shoppingItems = await ShoppingItem.find().populate("item");

  const categories = shoppingItems.map(({ item }) => {
    return {
      name: item.category.name,
      icon_src: item.category.icon_src,
    };
  });
  const uniqueCategories = [
    ...new Map(categories.map((item) => [item.name, item])).values(),
  ];

  return uniqueCategories;
}
