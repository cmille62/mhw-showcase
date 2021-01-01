import axios from "axios";
import { APISpecific, Preferences } from "../typings";
import { getConfig, postConfig } from "./config";
import { REACT_APP_API_ROOT_URL } from "../utils/constants";

export const get = async function (uid: string) {
  const url = `${REACT_APP_API_ROOT_URL}/preferences/${uid}`;

  try {
    return await axios.get<Preferences>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const update = async function (settings: Preferences) {
  const url = `${REACT_APP_API_ROOT_URL}/preferences`;

  try {
    return await axios.put(url, settings, postConfig);
  } catch (error) {
    return error;
  }
};

export const api: APISpecific<Preferences> = {
  get,
  update,
};
