import dbConnect from "../lib/dbConnect";
import Recipe from "../models/Recipe";

export async function getAllRecipes() {
  await dbConnect();

  const recipes = await Recipe.find();

  const sanitizedRecipes = recipes.map(({ id, name, variant }) => ({
    id: id,
    name: name,
    variant: variant,
  }));

  return sanitizedRecipes;
}
