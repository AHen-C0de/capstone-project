import dbConnect from "../lib/dbConnect";
import ShoppingItem from "../models/ShoppingItem";

export async function getAllShoppingItems() {
  await dbConnect();

  const shoppingItems = await ShoppingItem.find()
    .populate("item")
    .populate({ path: "item", populate: { path: "category" } });

  const sanitizedShoppingItems = shoppingItems.map(({ id, item, checked }) => ({
    id: item.id,
    name: item.name,
    category: item.category.id,
    checked: checked,
  }));

  return sanitizedShoppingItems;
}

// export async function getCurrentCategories() {
//   await dbConnect();

//   const shoppingItems = await ShoppingItem.find().populate("item");

//   const categories = shoppingItems.map(({ item }) => {
//     return {
//       name: item.category.name,
//       icon_src: item.category.icon_src,
//     };
//   });
//   const uniqueCategories = [
//     ...new Map(categories.map((item) => [item.name, item])).values(),
//   ];

//   return uniqueCategories;
// }
