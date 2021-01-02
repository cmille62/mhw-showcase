import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ImportPage, SettingsPage } from "../components/admin";
import { BaseRoute, Routes } from "../utils";

import { HomePage, ShowcasePage } from "../components";
import { Header } from "../components/common";

import "./style.scss";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        {/******************** HOME ********************/}
        <Route
          exact
          path={BaseRoute.path}
          render={() => <Redirect to={Routes.Home.path} />}
        />
        <Route
          path={Routes.Home.path}
          roles={Routes.Home.roles}
          component={HomePage}
        />

        {/************** Application Pages ****************/}
        <Route path={Routes.Showcase.path} component={ShowcasePage} />

        {/******************** Settings ********************/}
        <Route path={Routes.Admin.Import.path} component={ImportPage} />

        <Route path={Routes.Admin.Settings.path} component={SettingsPage} />
        <Route render={() => <Redirect to={Routes.Home.path} />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
