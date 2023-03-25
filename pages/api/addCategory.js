import dbConnect from "../../lib/dbConnect";
import Category from "../../models/Category";
import { getAllCategoryNames } from "../../services/categoryService";

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

//TODO: add session
export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      await dbConnect();
      const dbCategoryNames = await getAllCategoryNames();

      const postData = JSON.parse(request.body);

      // clean category name
      let cleanedName = postData.name.trim();
      //   - make first letter uppercase
      cleanedName = cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);

      // check data validity
      const [is_valid, error_msg] = checkData(cleanedName, dbCategoryNames);

      if (is_valid) {
        const createdCategory = await Category.create({
          name: cleanedName,
          icon_src: "/assets/icons/questionsmark.svg",
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
      return response.status(400).json(error.message);
    }
  } else {
    return response
      .status(405)
      .json({ message: "HTTP method is not allowed." });
  }
}
