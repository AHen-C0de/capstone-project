import { getAllItems } from "../../services/itemService";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const items = await getAllItems();
    const postData = JSON.parse(request.body);
    
    return response.status(201).json({
      message: "POST REQUEST FUNZT!",
      testMessage: postData,
    })    
  }
  else {
    return response
      .status(405)
      .json({message: "HTTP method is not allowed."})
  }
}