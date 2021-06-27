import { Document } from "mongoose";

export interface RawActionType {
  action: string;
  description?: string;
  conversion: string[];
}

export type ActionType = Document & RawActionType;
