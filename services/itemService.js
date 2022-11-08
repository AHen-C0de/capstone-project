import dbConnect from "../lib/dbConnect";
import Item from "../models/Item";

export async function getAllItems() {
  await dbConnect();

  const items = await Item.find().populate("category");

  const sanitizedItems = items.map(({ id, name, category }) => ({
    id: id,
    name: name,
    category: category.id,
  }));

  return sanitizedItems;
}
