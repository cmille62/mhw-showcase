import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { AddPage, ImportPage, SettingsPage } from "../components/admin";
import { BaseRoute, Routes } from "../utils";

import { AdminRouter, DocsRouter, HomePage, ShowcasePage } from "../components";
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
        <Route {...Routes.Home} component={HomePage} />
        
        {/************** Application Pages ****************/}
        <Route {...Routes.Docs.Router} component={DocsRouter} />

        {/************** Application Pages ****************/}
        <Route {...Routes.Showcase} component={ShowcasePage} />

        {/******************** Sub Routers ********************/}
        <Route {...Routes.Admin.Router} component={AdminRouter} />

        {/******************** Redirect ********************/}
        <Route render={() => <Redirect to={Routes.Home.path} />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
