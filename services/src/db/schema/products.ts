import Mongoose from "mongoose";

export const ProductsSchema = {
  upc: { type: String, default: "", required: true, unique: true, index: true },
  sku: String,
  mfg: String,



  lastUpdated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
};

export default GroupsSchema;
