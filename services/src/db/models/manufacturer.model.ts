import Mongoose from "mongoose";
import { ManufacturerSchema } from "../schema";
import { ManufacturerType } from "../types";

const schema = new Mongoose.Schema(ManufacturerSchema, {
  collection: "manufacturer",
  timestamps: true,
});

export const ManufacturerModel = Mongoose.model<ManufacturerType>("Manufacturer", schema);

export default ManufacturerModel;
