import React, { FunctionComponent } from "react";
import { SideNavigation } from "../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../common";
import { Routes } from "../../../utils";
import { observer } from "mobx-react";
import { VersionContent } from "./version.content";

export const VersionPage: FunctionComponent = observer(() => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink route={Routes.Home.path}>Version</NavigationLink>
        <NavigationLink route={Routes.Admin.Home.path}>Admin</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <SideNavigation />
        <VersionContent />
      </ContentPane>
    </ContentPane>
  );
});
