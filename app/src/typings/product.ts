export interface RawMagazineType {
  capacity?: string;
  qty?: number;
}

export interface RawBarrelType {
  caliber: string;
  length?: string;
  threaded?: boolean;
  pitch?: string;
  device?: string;
}

export interface RawSightType {
  font?: string;
  rear?: string;
  optic?: string;
}

export interface AttributesType {
  barrel?: RawBarrelType;
  magazine?: RawMagazineType[];
  sight?: RawSightType;
  safety?: string;
  finish?: string;
  [key: string]: any;
}

export interface Product {
  _id?: string;
  /** Identifying Information */
  upc: string;
  sku: string;

  /** Categorical Information */
  attributes: AttributesType;
  category: string;
  class: string;
  description: string;
  model: string;

  /** Quantity Information */
  qoh: number;

  /** Manufacturing Information */
  mfg: string;
  mfgSku: string;

  /** Financial Information */
  retail: string;
}

export type ProductLookupOptions = "sku" | "upc" | "mfg" | "id";

export const PRODUCT_LOOKUP: { [key: string]: ProductLookupOptions } = {
  SKU: "sku",
  UPC: "upc",
  MFG: "mfg",
  ID: "id",
};

export type ProductLookupType = {
  title: string;
  value: ProductLookupOptions;
};

export const ProductLookupOptions: ProductLookupType[] = [
  { title: "SKU", value: "sku" },
  { title: "UPC", value: "upc" },
  { title: "MFG Part Number", value: "mfg" },
];
