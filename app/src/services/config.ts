import { AxiosRequestConfig } from "axios";

export const getConfig: AxiosRequestConfig = {
  responseType: "json",
};

export const postConfig: AxiosRequestConfig = {
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};
