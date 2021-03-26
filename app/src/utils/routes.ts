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

const ADMIN_LIST = [ROLES.ADMIN];

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
    Router: {
      path: formatRoute("/admin/:page"),
      roles: ADMIN_LIST,
    },
    Home: {
      path: formatRoute("/admin/home"),
      roles: ADMIN_LIST,
    },
    Products: {
      Router: {
        path: formatRoute("/admin/products/:page"),
        roles: ADMIN_LIST,
      },
      Add: {
        path: formatRoute("/admin/products/add"),
        roles: ADMIN_LIST,
      },
      Import: {
        path: formatRoute("/admin/products/import"),
        roles: ADMIN_LIST,
      },
      Edit: {
        path: formatRoute("/admin/products/edit/:id"),
        roles: ADMIN_LIST,
      },
      ViewAll: {
        path: formatRoute("/admin/products/view"),
        roles: ADMIN_LIST,
      },
      View: {
        path: formatRoute("/admin/products/view/:id"),
        roles: ADMIN_LIST,
      },
    },
    Settings: {
      path: formatRoute("/admin/settings"),
      roles: ADMIN_LIST,
    },
  },
};
