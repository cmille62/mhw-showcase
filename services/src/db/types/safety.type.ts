import { Document } from "mongoose";

export interface RawSafetyType {
  safety: string;
  description?: string;
  conversion: string[];
}

export type SafetyType = Document & RawSafetyType;
