import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

import dbConnect from "../../lib/dbConnect";
import Category from "../../models/Category";
import {
  getAllCategoryNames,
  getAllCategories,
} from "../../services/categoryService";

/**
 * Check validity of to-post item
 * @param {string} categoryName category which user wants to post to DB
 * @param {string[]} dbCategoryNames names from all categories in DB
 * @returns {boolean} true if data are valid = item name is not yet in DB & category-ID exists, else false
 */
function checkData(categoryName, dbCategoryNames) {
  const dbCategoryNames_lwr = dbCategoryNames.map((name) => name.toLowerCase());
  let error_msg = "";

  // check whether category name is not yet in DB
  if (dbCategoryNames_lwr.includes(categoryName.toLowerCase())) {
    error_msg = "Category already exists.";
    return [false, error_msg];
  }

  return [true, error_msg];
}

export default async function handler(request, response) {
  const session = await unstable_getServerSession(
    request,
    response,
    authOptions
  );

  if (session) {
    if (request.method === "GET") {
      try {
        await dbConnect();
        const categories = await getAllCategories();

        return response.status(200).json({
          message: "Categories received.",
          categories: categories,
        });
      } catch (error) {
        return response.status(400).json(error.message);
      }
    } else if (request.method === "POST") {
      try {
        await dbConnect();
        const dbCategoryNames = await getAllCategoryNames();

        const name = JSON.parse(request.body);

        // clean category name
        let cleanedName = name.trim();
        //   - make first letter uppercase
        cleanedName =
          cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);

        // check data validity
        const [is_valid, error_msg] = checkData(cleanedName, dbCategoryNames);

        if (is_valid) {
          const createdCategory = await Category.create({
            name: cleanedName,
            icon_src: "/assets/icons/questionmark.svg",
          });

          return response.status(201).json({
            message: "Category created. Standard Icon assigned.",
            createdCategory: createdCategory,
          });
        }

        return response.status(422).json({
          message: "No Category was created.",
          error: error_msg,
        });
      } catch (error) {
        return response.status(400).json({
          message: "No Category was created.",
          error: error.message,
        });
      }
    } else {
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed." });
    }
  }
}
