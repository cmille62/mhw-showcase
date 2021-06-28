import { Document } from "mongoose";

export interface RawManufacturerType {
  manufacturer: string;
  description: string;
  conversion: string[];
}

export type ManufacturerType = Document & RawManufacturerType;
