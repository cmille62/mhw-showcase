export interface Product {
  _id: string;
  [key: string]: any;
}

export type ProductLookupOptions = "sku" | "upc" | "mfg";

export const PRODUCT_LOOKUP: { [key: string]: ProductLookupOptions } = {
  SKU: "sku",
  UPC: "upc",
  MFG: "mfg",
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
