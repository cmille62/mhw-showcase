import { REACT_APP_ROOT_URL, ROLES } from "./constants";

export const formatRoute = (path: string) => {
  return `${REACT_APP_ROOT_URL}${path}`;
};

export const BaseRoute = {
  path: formatRoute("/"),
};

export const Routes = {
  Home: {
    path: formatRoute("/home"),
    roles: [],
  },
  Showcase: {
    path: formatRoute("/view"),
    roles: [],
  },
  Admin: {
    Import: {
      path: formatRoute("/admin/import"),
      roles: [ROLES.ADMIN],
    },
    Settings: {
      path: formatRoute("/admin/settings"),
      roles: [ROLES.ADMIN],
    },
  },
};
