import dbConnect from "../../lib/dbConnect";
import Expense from "../../models/Expense";
//import { getAllExpenses } from "../../services/shoppingItemService";

export default async function handler(request, response) {
  switch (request.method) {
    // case "GET":
    //   try {
    //     const shoppingItems = await getAllShoppingItems();
    //     return response.status(200).json({
    //       message: "ShoppingItems received",
    //       shoppingItems: shoppingItems,
    //     });
    //   } catch (err) {
    //     return response.status(400).json(err.message);
    //   }
    case "POST":
      await dbConnect();
      try {
        const postData = JSON.parse(request.body);

        //check whether POST data meet required data format
        const date = new Date(postData.date);
        const amount = postData.amount;
        const isValidDate =
          !isNaN(new Date(date)) &&
          date > new Date("2021-12-12") &&
          date < new Date("2099-12-12");

        if (!used_ids.includes(postData.item)) {
          const createdShoppingItem = await ShoppingItem.create(postData);
          return response.status(201).json({
            message: "ShoppingItem created",
            createdShoppingItem: createdShoppingItem,
          });
        }
        return response
          .status(409)
          .json({ message: "ShoppingItem already exists" });
      } catch (err) {
        return response.status(400).json(err.message);
      }
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
