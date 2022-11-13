import mongoose from "mongoose";
import "./Item";

const { Schema } = mongoose;

const shoppingItemSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  checked: { type: Boolean, required: true },
  userEmail: { type: String, required: true },
});

const ShoppingItem =
  mongoose.models.ShoppingItem ||
  mongoose.model("ShoppingItem", shoppingItemSchema, "shoppingItems");

export default ShoppingItem;
