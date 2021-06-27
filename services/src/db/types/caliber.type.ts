import { Document } from "mongoose";

export interface RawCaliberType {
  caliber: string;
  description: string;
  conversion: string[];
}
export type CaliberType = Document & RawCaliberType;
