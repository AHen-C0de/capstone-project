import dbConnect from "../../lib/dbConnect";
import ShoppingItem from "../../models/ShoppingItem";
import mongoose from "mongoose";

export default async function handler(request, response) {
  const id = request.query;

  console.log(id);
  console.log("VALID ID: ", mongoose.Types.ObjectId.isValid(id));

  await dbConnect();

  console.log("CONNECTED");

  try {
    switch (request.method) {
      case "PUT":
        console.log("PUT REQ");

        //const data = JSON.parse(request.body);
        const updatedShoppingItem = await ShoppingItem.findByIdAndUpdate(
          id,
          request.body
        );

        console.log("UPDATED: ", updatedShoppingItem);

        return response.status(200).json({
          message: "ShoppingItem updated",
          updatedShoppingItem: updatedShoppingItem,
        });
    }
  } catch (err) {
    console.log("ERROR");

    response.status(400).json(err.message);
  }
}
