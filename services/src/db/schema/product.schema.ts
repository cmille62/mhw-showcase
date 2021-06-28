export const ProductsSchema = {
  /** Identifying Information */
  upc: { type: String, default: "", required: true, unique: true, index: true },
  sku: String,

  /** Categorical Information */
  attributes: Object,
  category: String,
  class: String,
  description: String,

  /** Quantity Information */
  qoh: Number,

  /** Manufacturing Information */
  mfg: String,
  mfgSKU: String,

  retail: String,
};

export default ProductsSchema;
