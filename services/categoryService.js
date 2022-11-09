import dbConnect from "../lib/dbConnect";
import Category from "../models/Category";

export async function getAllCategories() {
  await dbConnect();

  const categories = await Category.find();

  const sanitizedCategories = categories.map(({ id, name, icon_src }) => ({
    id,
    name,
    icon_src,
  }));

  return sanitizedCategories;
}
