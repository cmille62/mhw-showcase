import Mongoose from "mongoose";
import { CaliberSchema } from "../schema";
import { CaliberType } from "../types";

const schema = new Mongoose.Schema(CaliberSchema, {
  collection: "caliber",
});

export const CaliberModel = Mongoose.model<CaliberType>("caliber", schema);

export default CaliberModel;
