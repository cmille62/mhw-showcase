import { Document } from "mongoose";

export interface RawProductsType {
  /** Identifying Information */
  upc: string;
  sku: string;

  /** Categorical Information */
  attributes: Record<string, any>;
  category: string;
  class: string;
  description: string;

  /** Quantity Information */
  qoh: number;

  /** Manufacturing Information */
  mfg: string;
  mfgSku: string;
}

export type ProductsType = Document & RawProductsType;
