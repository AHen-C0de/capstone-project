import mongoose from "mongoose";
import "./Category";

const { Schema } = mongoose;

const itemsSchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

const Item =
  mongoose.models.Item || mongoose.model("Item", itemsSchema, "items");

export default Item;
