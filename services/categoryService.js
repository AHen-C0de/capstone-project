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

export async function getCategoryByName(name) {
  await dbConnect();

  const category = await Category.findOne({ name: name });

  const sanitizedCategory = {
    id: category.id,
    name: category.name,
    icon_src: category.icon_src,
  };

  return sanitizedCategory;
}
