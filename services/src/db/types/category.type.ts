import { Document } from "mongoose";

export interface RawCategoryType {
  category: string;
  description?: string;
  conversion: string[];
}

export type CategoryType = Document & RawCategoryType;
