import axios from "axios";
import { Product } from "../typings";
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
    return await axios.get<Product>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const get = async function (upc: string) {
  const url = `${REACT_APP_API_ROOT_URL}/products/${upc}`;

  try {
    return await axios.get<Product>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const update = async function (product: Product) {
  const url = `${REACT_APP_API_ROOT_URL}/products/update`;

  try {
    return await axios.put(url, product, postConfig);
  } catch (error) {
    return error;
  }
};

export const api = {
  get,
  getAll,
  update,
};
