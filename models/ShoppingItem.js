import mongoose from "mongoose";
const { Schema } = mongoose;

const shoppingItemSchema = new Schema({
  item_id: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  checked: { type: Boolean, required: true },
});

const shoppingItem =
  mongoose.models.shoppingItem ||
  mongoose.model("shoppingItem", shoppingItemSchema, "shoppingItems");

export default shoppingItem;
