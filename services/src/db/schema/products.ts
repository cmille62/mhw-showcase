import Mongoose from "mongoose";

export const ProductsSchema = {
  upc: { type: String, default: "", required: true, unique: true, index: true },
  sku: String,
  mfg: String,
  class: String,

  description: String,

  retail: String,
  
  qoh: Number,

  attributes: Object,
  




  lastUpdated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
};

export default ProductsSchema;
