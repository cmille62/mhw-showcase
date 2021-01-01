import React, { Component } from "react";
import { RouterStore, SettingsStore } from "../../../stores";
import { SideNavigation } from "../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../common";
import { Routes } from "../../../utils";
import SettingsForm from "./settings.form";
import { inject, observer } from "mobx-react";

interface Props {
  routerStore: RouterStore;
  settingsStore: SettingsStore;
}

@inject('settingsStore', 'routerStore')
@observer
export class SettingsPage extends Component<Props, {}> {
  render() {
    return (
      <ContentPane>
        <Navigation>
          <NavigationLink {...this.props} route={Routes.Home.path}>
            Home
          </NavigationLink>
          <NavigationLink>Admin</NavigationLink>
          <NavigationLink>Settings</NavigationLink>
        </Navigation>
        <ContentPane flexDirection="row">
          <SideNavigation {...this.props} />
          <SettingsForm {...this.props} />
        </ContentPane>
      </ContentPane>
    );
  }
}
