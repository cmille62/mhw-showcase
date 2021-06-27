import { Document } from "mongoose";

export interface CategoryType extends Document {
  category: string;
  description: string;
  conversion: string[];
}
