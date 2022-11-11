import dbConnect from "../../lib/dbConnect";
import Expense from "../../models/Expense";

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      await dbConnect();
      const postData = JSON.parse(request.body);

      //validate data format
      const date = new Date(postData.date);
      const amount = parseFloat(postData.amount);

      const isValidAmount =
        typeof amount === "number" && amount > 0 && amount <= 500;
      const isValidDate =
        !isNaN(new Date(date)) &&
        date > new Date("2021-12-12") &&
        date < new Date("2099-12-12");

      if (isValidAmount && isValidDate) {
        const createdExpense = await Expense.create(postData);
        return response.status(201).json({
          message: "Expense created",
          createdExpense: createdExpense,
        });
      }
      return response.status(409).json({
        message: "Sumitted data don't meet required format",
        submittedData: postData,
        validation: {
          isValidAmount: isValidAmount,
          isValidDate: isValidDate,
        },
      });
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
  return response.status(405).json({ message: "HTTP method is not allowed" });
}
