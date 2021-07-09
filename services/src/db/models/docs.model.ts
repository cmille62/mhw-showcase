import Mongoose from "mongoose";
import { DocsSchema } from "../schema";
import { DocsType } from "../types";

const schema = new Mongoose.Schema(DocsSchema, {
  collection: "docs",
  timestamps: true,
});

export const DocsModel = Mongoose.model<DocsType>("docs", schema);

export default DocsModel;
