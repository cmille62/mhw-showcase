import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../../utils";

import { HomePage } from "./home/home.page";
import { SettingsPage } from "./settings/settings.page";
import { VersionPage } from "./version/version.page";

import { CollectionRouter } from "./collection";
import { ProductsRouter } from "./products";

/**
 * Handles all routes within the administration pages.
 */
export const AdminRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route {...Routes.Admin.Home} component={HomePage} />

      <Route {...Routes.Admin.Settings} component={SettingsPage} />
      <Route {...Routes.Admin.Version} component={VersionPage} />

      <Route {...Routes.Admin.Products.Router} component={ProductsRouter} />
      <Route {...Routes.Admin.Collection.Home} component={CollectionRouter} />

      {/******************** Redirect ********************/}
      <Route render={() => <Redirect to={Routes.Admin.Home.path} />} />
    </Switch>
  );
};
