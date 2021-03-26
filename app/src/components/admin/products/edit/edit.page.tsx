import React, { FunctionComponent } from "react";
import { SideNavigation } from "../../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../../common";
import { Routes } from "../../../../utils";
import { EditForm } from "./edit.form";
import { observer } from "mobx-react";

export const EditPage: FunctionComponent = observer(() => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink route={Routes.Home.path}>Home</NavigationLink>
        <NavigationLink route={Routes.Admin.Home.path}>Admin</NavigationLink>
        <NavigationLink>Edit</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <SideNavigation />
        <EditForm />
      </ContentPane>
    </ContentPane>
  );
});
