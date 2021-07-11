import axios from "axios";
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

export async function distinct(collection: string, path: string) {
  const url = `${REACT_APP_API_ROOT_URL}/collections/${collection}/distinct/${path}`;

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

export async function put(collection: string, id: string, document: any) {
  const url = `${REACT_APP_API_ROOT_URL}/collections/${collection}/${id}`;

  try {
    const result = await axios.put(url, document);
    return { data: result.data, status: result.status };
  } catch (error) {
    return { status: 400 };
  }
}

export async function post(collection: string, document: any) {
  const url = `${REACT_APP_API_ROOT_URL}/collections/${collection}`;

  try {
    const result = await axios.post(url, document);
    return { data: result.data, status: result.status };
  } catch (error) {
    return { status: 400 };
  }
}

export const api = {
  distinct,
  getAll,
  get,
  reset,
  put,
  post,
};
