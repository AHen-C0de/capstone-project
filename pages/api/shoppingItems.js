import dbConnect from "../../lib/dbConnect";
import ShoppingItem from "../../models/ShoppingItem";
import { getAllShoppingItems } from "../../services/shoppingItemsService";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET":
      try {
        const shoppingItems = await getAllShoppingItems();
        return response.status(200).json({
          message: "ShoppingItems received",
          shoppingItems: shoppingItems,
        });
      } catch (err) {
        return response.status(400).json(err.message);
      }
    case "PATCH":
      await dbConnect();
      try {
        const patchData = JSON.parse(request.body);
        const updatedShoppingItem = await ShoppingItem.findByIdAndUpdate(
          { _id: patchData.id },
          { $set: patchData.data },
          { new: true } //set 'new' to return updated document
        );

        return response.status(200).json({
          message: "ShoppingItem updated",
          updatedShoppingItem: updatedShoppingItem,
        });
      } catch (err) {
        return response.status(400).json(err.message);
      }
    case "DELETE":
      await dbConnect();
      try {
        const data = JSON.parse(request.body);
        await ShoppingItem.findByIdAndDelete(data.id);
        return response
          .status(200)
          .json({ message: "ShoppingItem deleted", deletedId: data.id });
      } catch (err) {
        return response.status(400).json(err.message);
      }
    case "POST":
      await dbConnect();
      try {
        const postData = JSON.parse(request.body);

        //check whether item exists already in shoppingItems collection
        const shoppingItems = await getAllShoppingItems();
        const used_ids = shoppingItems.map(
          (shoppingItem) => shoppingItem.item.id
        );

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
