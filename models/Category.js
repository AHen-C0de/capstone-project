import mongoose from "mongoose";

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  name: { type: String, required: true },
  icon_src: { type: String, required: true },
});

const Category =
  mongoose.models.Category ||
  mongoose.model("Category", categoriesSchema, "categories");

export default Category;
