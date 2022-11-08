import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String },
  icon_src: { type: String },
});

const itemsSchema = new Schema({
  name: { type: String, required: true },
  category: { type: categorySchema },
});

const Item =
  mongoose.models.Item || mongoose.model("Item", itemsSchema, "items");

export default Item;
