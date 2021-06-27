import React, { FunctionComponent } from "react";
import { SideNavigation } from "../../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../../common";
import { Routes } from "../../../../utils";
import { AddContent } from "./add.content";
import { observer } from "mobx-react";

export const AddPage: FunctionComponent = observer(() => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink route={Routes.Home.path}>Home</NavigationLink>
        <NavigationLink route={Routes.Admin.Home.path}>Admin</NavigationLink>
        <NavigationLink>Add</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <SideNavigation />
        <AddContent />
      </ContentPane>
    </ContentPane>
  );
});
