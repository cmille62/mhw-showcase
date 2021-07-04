import Mongoose from "mongoose";
import { SafetySchema } from "../schema";
import { SafetyType } from "../types";

const schema = new Mongoose.Schema(SafetySchema, {
  collection: "safety",
  timestamps: true,
});

export const SafetyModel = Mongoose.model<SafetyType>("safety", schema);

export default SafetyModel;
