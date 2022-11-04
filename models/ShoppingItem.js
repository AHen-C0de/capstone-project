import mongoose from "mongoose";
const { Schema } = mongoose;
import "./Item";

const shoppingItemSchema = new Schema({
  name: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  checked: { type: Boolean, required: true },
});

const ShoppingItem =
  mongoose.models.ShoppingItem ||
  mongoose.model("ShoppingItem", shoppingItemSchema, "shoppingItems");

export default ShoppingItem;
