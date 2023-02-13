import dbConnect from "../../lib/dbConnect"
import { getAllItems } from "../../services/itemService";
import Expense from "../../models/Item"
import Item from "../../models/Item";

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      // await dbConnect();
      const items = await getAllItems();
      const postData = JSON.parse(request.body);
      
      // const createdItem = await Item.create(postData)
  
      return response.status(201).json({
        message: "Item created",
        createdItem: postData,
      });
    } catch (error) {
      return response.status(400).json(error.message)
    } 
  }
  else {
    return response
      .status(405)
      .json({message: "HTTP method is not allowed."})
  }
}