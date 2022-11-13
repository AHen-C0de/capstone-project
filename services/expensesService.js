import dbConnect from "../lib/dbConnect";
import Expense from "../models/Expense";

export async function getExpensesByUser(userEmail) {
  await dbConnect();

  const expenses = await Expense.find({ userEmail: userEmail });

  const sanitizedExpenses = expenses.map(({ amount, date }) => ({
    amount,
    date: date.toString(),
  }));

  return sanitizedExpenses;
}
