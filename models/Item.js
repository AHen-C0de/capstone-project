import mongoose from "mongoose";

const { Schema } = mongoose;

const itemsSchema = new Schema({
  name: { type: String, required: true },
});

const Item =
  mongoose.models.Item || mongoose.model("Item", itemsSchema, "items");

export default Item;
