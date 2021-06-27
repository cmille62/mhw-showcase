import { Document } from "mongoose";

export interface CaliberType extends Document {
  caliber: string;
  description: string;
}
