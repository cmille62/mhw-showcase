import axios from "axios";
import { API, Settings } from "../typings";
import { getConfig, postConfig } from "./config";
import { REACT_APP_API_ROOT_URL } from "../utils/constants";

export const get = async function () {
  const url = `${REACT_APP_API_ROOT_URL}/settings`;

  try {
    return await axios.get<Settings>(url, getConfig);
  } catch (error) {
    return error;
  }
};

export const update = async function (settings: Settings) {
  const url = `${REACT_APP_API_ROOT_URL}/settings`;

  try {
    return await axios.put(url, settings, postConfig);
  } catch (error) {
    return error;
  }
};

export const api: API<Settings> = {
  get,
  update,
};
