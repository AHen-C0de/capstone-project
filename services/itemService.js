import dbConnect from "../lib/dbConnect";
import Item from "../models/Item";

export async function getAllItems() {
  await dbConnect();

  const items = await Item.find();

  const sanitizedItems = items.map(({ id, name, category }) => ({
    id: id,
    name: name,
    category: { name: category.name, icon_src: category.icon_src },
  }));

  return sanitizedItems;
}
