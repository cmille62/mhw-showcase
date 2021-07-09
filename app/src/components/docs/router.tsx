import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../../utils";

// import { HomePage } from "./home/home.page";
import { FaqPage } from "./faq/faq.page";

/**
 * Handles all routes within the administration pages.
 */
export const DocsRouter: FunctionComponent = () => {
  return (
    <Switch>
      {/* <Route {...Routes.Admin.Home} component={HomePage} /> */}

      <Route {...Routes.Docs.FAQ} component={FaqPage} />

      {/******************** Redirect ********************/}
      <Route render={() => <Redirect to={Routes.Docs.Home.path} />} />
    </Switch>
  );
};
