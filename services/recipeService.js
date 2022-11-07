import dbConnect from "../lib/dbConnect";
import Recipe from "../models/Recipe";

export async function getAllRecipes() {
  await dbConnect();

  const recipes = await Recipe.find().populate("items");

  const sanitizedRecipes = recipes.map(({ id, name, variant, items }) => ({
    id,
    name: name,
    variant: variant,
    items: items.map((item) => ({ id: item.id, name: item.name })),
  }));

  return sanitizedRecipes;
}
