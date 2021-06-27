import Mongoose from "mongoose";
import { ProductsSchema } from "../schema";
import { CaliberType } from "../types";

const schema = new Mongoose.Schema(ProductsSchema, {
  collection: "firearm-caliber",
});

export const CaliberModel = Mongoose.model<CaliberType>(
  "firearm-caliber",
  schema
);

export default CaliberModel;
