import Mongoose from "mongoose";
import { CategorySchema } from "../schema";
import { CategoryType } from "../types";

const schema = new Mongoose.Schema(CategorySchema, {
  collection: "category",
});

export const CategoryModel = Mongoose.model<CategoryType>("category", schema);

export default CategoryModel;
