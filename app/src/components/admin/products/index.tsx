import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../../../utils";

import { AddPage } from "./add/add.page";
import { EditPage } from "./edit/edit.page";
import { ImportPage } from "./import/import.page";
import { ViewAllPage } from "./view-all/view-all";

/**
 * Handles all routes within the administration product pages.
 */
export const ProductsRouter: FunctionComponent = () => {
  return (
    <Switch>
      {/******************** Product Pages ********************/}
      <Route {...Routes.Admin.Products.Add} component={AddPage} />
      <Route {...Routes.Admin.Products.Edit} component={EditPage} />
      <Route {...Routes.Admin.Products.Import} component={ImportPage} />
      <Route {...Routes.Admin.Products.ViewAll} component={ViewAllPage} />

      {/******************** Redirect ********************/}
      <Route render={() => <Redirect to={Routes.Admin.Home.path} />} />
    </Switch>
  );
};
