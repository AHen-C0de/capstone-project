import dbConnect from "../../lib/dbConnect";
import ShoppingItem from "../../models/ShoppingItem";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { getShoppingItemsByUser } from "../../services/shoppingItemService";

export default async function handler(request, response) {
  const session = await unstable_getServerSession(
    request,
    response,
    authOptions
  );

  switch (request.method) {
    case "GET":
      try {
        const shoppingItems = await getShoppingItemsByUser(session.user.email);
        return response.status(200).json({
          message: "ShoppingItems received",
          shoppingItems: shoppingItems,
        });
      } catch (err) {
        return response.status(400).json(err.message);
      }
    case "PATCH":
      try {
        await dbConnect();
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
      try {
        await dbConnect();
        const id = JSON.parse(request.body);
        await ShoppingItem.findByIdAndDelete(id);
        return response
          .status(200)
          .json({ message: "ShoppingItem deleted", deletedId: id });
      } catch (err) {
        return response.status(400).json(err.message);
      }
    case "POST":
      try {
        await dbConnect();
        const postData = JSON.parse(request.body);
        const postDataPlusUser = { ...postData, userEmail: session.user.email };

        //check whether item exists already in shoppingItems collection
        const shoppingItems = await getShoppingItemsByUser(session.user.email);
        const used_ids = shoppingItems.map(
          (shoppingItem) => shoppingItem.item_id
        );

        if (!used_ids.includes(postDataPlusUser.item)) {
          const createdShoppingItem = await ShoppingItem.create(
            postDataPlusUser
          );
          return response.status(201).json({
            message: "ShoppingItem created",
            createdShoppingItem: createdShoppingItem,
          });
        }
        return response
          .status(422)
          .json({ message: "ShoppingItem already exists" });
      } catch (err) {
        return response.status(400).json(err.message);
      }
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed." });
  }
}
