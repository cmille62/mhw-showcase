import React, { FunctionComponent } from "react";
import { RouterStore, SettingsStore } from "../../../stores";
import { SideNavigation } from "../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../common";
import { Routes } from "../../../utils";
import SettingsForm from "./settings.form";
import { observer } from "mobx-react";

export const SettingsPage: FunctionComponent = observer(() => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink route={Routes.Home.path}>Home</NavigationLink>
        <NavigationLink>Admin</NavigationLink>
        <NavigationLink>Settings</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <SideNavigation />
        <SettingsForm />
      </ContentPane>
    </ContentPane>
  );
});
