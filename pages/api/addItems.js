import dbConnect from "../../lib/dbConnect";
import Item from "../../models/Item";
import { getAllItemNames } from "../../services/itemService";
import { getAllCategoryIDs } from "../../services/categoryService";

/**
 * Check validity of to-post item
 * @param {object} item item which user wants to post to DB
 * @param {string[]} dbItemNames names from all items in DB
 * @param {number[]} dbCategoryIDs IDs from all categories in DB
 * @returns {boolean} true if data are valid = item name is not yet in DB & category-ID exists, else false
 */
function checkData(item, dbItemNames, dbCategoryIDs) {
  const names = dbItemNames.map((name) => name.toLowerCase());
  let error_msg = "";

  // check whether item name is not yet in DB
  if (names.includes(item.name.toLowerCase())) {
    error_msg = "Item already exists.";
    return [false, error_msg];
  }
  // check whether category-ID exists in DB
  if (!dbCategoryIDs.includes(item.category)) {
    error_msg = "Category-ID does not exist.";
    return [false, error_msg];
  }
  return [true, error_msg];
}

//TODO: add session
export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      await dbConnect();
      const dbItemNames = await getAllItemNames();
      const dbCategoryIDs = await getAllCategoryIDs();

      const postData = JSON.parse(request.body);

      // clean item name
      let cleanedName = postData.name.trim();
      //   - make first letter uppercase
      cleanedName = cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
      const cleanedData = {
        ...postData,
        name: cleanedName,
      };
      // check data validity
      const [is_valid, error_msg] = checkData(
        cleanedData,
        dbItemNames,
        dbCategoryIDs
      );

      if (is_valid) {
        const createdItem = await Item.create(cleanedData);

        return response.status(201).json({
          message: "Item created.",
          createdItem: createdItem,
        });
      }

      return response.status(422).json({
        message: "No Item was created.",
        error: error_msg,
      });
    } catch (error) {
      return response.status(400).json({
        message: "No Item was created.",
        error: error.message,
      });
    }
  } else {
    return response
      .status(405)
      .json({ message: "HTTP method is not allowed." });
  }
}
