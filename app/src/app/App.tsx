import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ImportPage, SettingsPage } from "../components/admin";
import { RouterStore } from "../stores";
import { BaseRoute, Routes } from "../helpers";

import { HomePage } from "../components";
import { Header, Loading } from "../components/common";

import "./style.scss";

interface Props {
  routerStore: RouterStore;
}

interface State {
  isLoading: boolean;
}

@inject("routerStore")
@observer
class App extends React.Component<Props, State> {
  interval!: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    this.setState({ isLoading: false });
  }

  public render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
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

          {/******************** Settings ********************/}
          <Route path={Routes.Admin.Import.path} component={ImportPage} />

          <Route path={Routes.Admin.Settings.path} component={SettingsPage} />
          <Route render={() => <Redirect to={Routes.Home.path} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
