import Mongoose from "mongoose";
import { ActionSchema } from "../schema";
import { ActionType } from "../types";

const schema = new Mongoose.Schema(ActionSchema, {
  collection: "action",
  timestamps: true,
});

export const ActionModel = Mongoose.model<ActionType>("action", schema);

export default ActionModel;
