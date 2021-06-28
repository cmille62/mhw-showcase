import { Document } from "mongoose";

export interface RawCaliberType {
  caliber: string;
  description: string;
  conversion: string[];

  diameter?: {
    metric?: string;
    standard?: string;
  };

  type?: string;
}

export type CaliberType = Document & RawCaliberType;
