import dbConnect from "../lib/dbConnect";
import Expense from "../models/Expense";

export async function getAllExpenses() {
  await dbConnect();

  const expenses = await Expense.find();

  const sanitizedExpenses = expenses.map(({ amount, date }) => ({
    amount,
    date: date.toString(),
  }));

  return sanitizedExpenses;
}
