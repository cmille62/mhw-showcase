import Mongoose from "mongoose";
import { ProductsSchema } from "../schema";
import { ActionType } from "../types";

const schema = new Mongoose.Schema(ProductsSchema, {
  collection: "firearm-action",
});

export const ActionModel = Mongoose.model<ActionType>(
  "firearm-action",
  schema
);

export default ActionModel;
