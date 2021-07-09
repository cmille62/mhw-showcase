import axios from "axios";
import { StringIterator } from "lodash";
import { REACT_APP_API_ROOT_URL } from "../utils";
import { getConfig } from "./config";

export async function getAll(collection: string) {
  const url = `${REACT_APP_API_ROOT_URL}/collections/${collection}/all`;

  try {
    const result = await axios.get(url, getConfig);
    return { data: result.data, status: result.status };
  } catch (error) {
    return { status: 400 };
  }
}

export async function get(collection: string, id: string) {
  const url = `${REACT_APP_API_ROOT_URL}/collections/${collection}/${id}`;

  try {
    const result = await axios.get(url, getConfig);
    return { data: result.data, status: result.status };
  } catch (error) {
    return { status: 400 };
  }
}

export async function reset(collection: string) {
  const url = `${REACT_APP_API_ROOT_URL}/collections/${collection}/reset`;

  try {
    const result = await axios.put(url, getConfig);
    return { data: result.data, status: result.status };
  } catch (error) {
    return { status: 400 };
  }
}

export const api = {
  getAll,
  get,
  reset,
};
