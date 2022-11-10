import mongoose from "mongoose";

const { Schema } = mongoose;

const expensesSchema = new Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Expense =
  mongoose.models.Expense ||
  mongoose.model("Expense", expensesSchema, "expenses");

export default Expense;
