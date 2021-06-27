import { Document } from "mongoose";

export interface ActionType extends Document {
  action: string;
  description: string;
}
