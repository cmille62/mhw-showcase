import { Document } from "mongoose";

export interface SettingsType extends Document {
  live: boolean;
}
