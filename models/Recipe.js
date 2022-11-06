import mongoose from "mongoose";
const { Schema } = mongoose;
import "./Item";

const recipesSchema = new Schema({
  name: { type: String, required: true },
  variant: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: "Item", required: true }],
});

const Recipe =
  mongoose.models.Recipe || mongoose.model("Recipe", recipesSchema, "recipes");

export default Recipe;
