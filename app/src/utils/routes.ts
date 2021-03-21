import { REACT_APP_ROOT_URL, ROLES } from "./constants";

export const formatRoute = (path: string) => {
  return `${REACT_APP_ROOT_URL}${path}`;
};

export const BaseRoute = {
  path: formatRoute("/"),
};

interface RouteProps {
  path: string;
  roles: string[];
}

interface RoutesProps {
  [key: string]: RouteProps | RoutesProps;
}

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
    Add: {
      path: formatRoute("/admin/add"),
      roles: [ROLES.ADMIN],
    },
    Settings: {
      path: formatRoute("/admin/settings"),
      roles: [ROLES.ADMIN],
    },
  },
};
