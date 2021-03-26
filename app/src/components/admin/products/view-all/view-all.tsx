import React, { FunctionComponent } from "react";
import { SideNavigation } from "../../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../../common";
import { Routes } from "../../../../utils";
import { ViewAllForm } from "./view-all.form";
import { observer } from "mobx-react";

export const ViewAllPage: FunctionComponent = observer(() => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink route={Routes.Home.path}>Home</NavigationLink>
        <NavigationLink route={Routes.Admin.Home.path}>Admin</NavigationLink>
        <NavigationLink>View All</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <SideNavigation />
        <ViewAllForm />
      </ContentPane>
    </ContentPane>
  );
});
