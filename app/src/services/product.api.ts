import axios from "axios";
import { Product, PRODUCT_LOOKUP } from "../typings";
import { getConfig, postConfig } from "./config";
import { REACT_APP_API_ROOT_URL } from "../utils/constants";
import { encodeQueryParameters } from "./utils";

export const getAll = async function (query: {
  [key: string]: string | number;
}) {
  const url = `${REACT_APP_API_ROOT_URL}/products/all${encodeQueryParameters(
    query
  )}`;

  try {
    return await axios.get<Product[]>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const getPagination = async function (query: {
  [key: string]: string | number;
}) {
  const url = `${REACT_APP_API_ROOT_URL}/products/page${encodeQueryParameters(
    query
  )}`;

  try {
    return await axios.get<Product[]>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const getByUPC = async function (value: string) {
  return getBy(value, PRODUCT_LOOKUP.UPC);
};

export const getBySKU = async function (value: string) {
  return getBy(value, PRODUCT_LOOKUP.SKU);
};

export const getByID = async function (value: string) {
  return getBy(value, PRODUCT_LOOKUP.ID);
};

export const getBy = async function (value: string, type: string) {
  const url = `${REACT_APP_API_ROOT_URL}/products/${type}/${value}`;

  try {
    return await axios.get<Product>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const getCount = async function (query: string) {
  const url = `${REACT_APP_API_ROOT_URL}/products/count/${query}`;

  try {
    return await axios.get<{ qty: number }>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const update = async function (product: Product) {
  const url = `${REACT_APP_API_ROOT_URL}/products`;

  try {
    return await axios.put(url, product, postConfig);
  } catch (error) {
    return error;
  }
};

export const api = {
  getBy,
  getByUPC,
  getBySKU,
  getByID,

  getCount,
  getPagination,
  getAll,
  update,
};
