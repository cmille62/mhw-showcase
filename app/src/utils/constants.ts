const apiRoot = process.env.REACT_APP_API_ROOT_URL;
const appRoot = process.env.REACT_APP_ROOT_URL;

export const REACT_APP_API_ROOT_URL = apiRoot;
export const REACT_APP_ROOT_URL = appRoot;

export const ROLES = {
  ADMIN: "admin",
};

export const DEFAULT_PAGE = 1;
export const DEFAULT_SIZE = 25;

export const SORT: { [key: string]: string } = {
  none: "",
  ascending: "asc",
  descending: "desc",
};
