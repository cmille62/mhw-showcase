import { Document } from "mongoose";

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

export interface RawProductsType {
  /** Identifying Information */
  upc: string;
  sku: string;

  /** Categorical Information */
  attributes: Record<string, any>;
  category: string;
  class: string;
  description: string;
  model: string;

  /** Other */
  barrel?: RawBarrelType;
  magazine?: RawMagazineType[];
  sight?: RawSightType;

  /** Quantity Information */
  qoh: number;

  /** Manufacturing Information */
  mfg: string;
  mfgSku: string;

  /** Financial Information */
  retail: String,
}

export type ProductsType = Document & RawProductsType;
