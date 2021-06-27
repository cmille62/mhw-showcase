import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../../../utils";

import { CollectionViewAll } from "./collection.all";
import { CollectionEdit } from "./collection.edit";
import { CollectionHome } from "./collection.home";
import { CollectionPage } from "./collection.page";

/**
 * Handles all routes within the administration collection pages.
 */
export const CollectionRouter: FunctionComponent = () => {
  const { Collection } = Routes.Admin;

  return (
    <CollectionPage>
      <Switch>
        {/******************** Collection Pages ********************/}
        <Route {...Collection.Edit} component={CollectionEdit} />
        <Route {...Collection.Router} component={CollectionViewAll} />
        <Route {...Collection.Home} component={CollectionHome} />

        {/******************** Redirect ********************/}
        <Route render={() => <Redirect to={Routes.Admin.Home.path} />} />
      </Switch>
    </CollectionPage>
  );
};
