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

export interface AttributesType {
  barrel?: RawBarrelType;
  magazine?: RawMagazineType[];
  sight?: RawSightType;
  safety?: string;
  finish?: string;
  [key: string]: any;
}

export interface RawProductsType {
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

export type ProductsType = Document & RawProductsType;
