import dbConnect from "../../lib/dbConnect";
import ShoppingItem from "../../models/ShoppingItem";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();

  try {
    switch (request.method) {
      case "PATCH":
        const data = JSON.parse(request.body);

        const updatedShoppingItem = await ShoppingItem.findByIdAndUpdate(
          { _id: data.id },
          { $set: data.updateData }
        );

        return response.status(200).json({
          message: "ShoppingItem updated",
          updatedShoppingItem: updatedShoppingItem,
        });
    }
  } catch (err) {
    response.status(400).json(err.message);
  }
}
