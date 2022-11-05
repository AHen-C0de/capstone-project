import dbConnect from "../../lib/dbConnect";
import ShoppingItem from "../../models/ShoppingItem";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();
  const data = JSON.parse(request.body);

  switch (request.method) {
    case "PATCH":
      try {
        const updatedShoppingItem = await ShoppingItem.findByIdAndUpdate(
          { _id: data.id },
          { $set: data.updateData },
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
      await ShoppingItem.findByIdAndDelete(data.id);
      return response
        .status(200)
        .json({ message: "ShoppingItem deleted", deletedId: data.id });

    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
