import Mongoose from "mongoose";
import { SettingsSchema } from "../schema";
import { SettingsType } from "../types";

const schema = new Mongoose.Schema(SettingsSchema, {
  collection: "settings",
  timestamps: true,
});

export const Settings = Mongoose.model<SettingsType>("settings", schema);

export default Settings;
