import dbConnect from "../lib/dbConnect";
import Item from "../models/Item";

export async function getAllItems() {
  await dbConnect();

  const items = await Item.find();

  const sanitizedItems = items.map(({ id, name }) => ({
    id: id,
    name: name,
  }));

  return sanitizedItems;
}
