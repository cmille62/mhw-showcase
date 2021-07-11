import { Schema } from "mongoose";

export const BarrelSchema = new Schema({
  caliber: String,
  length: Number,
  threaded: Boolean,
  pitch: String,
  device: String,
});

export const SightSchema = new Schema({
  font: String,
  rear: String,
  optic: String,
});

export const MagazineSchema = new Schema({
  capacity: String,
  qty: Number,
});

export const AttributesSchema = new Schema({
  barrel: BarrelSchema,
  magazine: [MagazineSchema],
  sight: SightSchema,
  safety: String,
  finish: String,
});

export const ProductsSchema = {
  /** Identifying Information */
  upc: { type: String, default: "", required: true, unique: true, index: true },
  sku: String,

  /** Categorical Information */
  attributes: AttributesSchema,
  category: String,
  class: String,
  description: String,
  model: String,

  /** Quantity Information */
  qoh: Number,

  /** Manufacturing Information */
  mfg: String,
  mfgSKU: String,

  /** Financial Information */
  retail: String,
};

export default ProductsSchema;
