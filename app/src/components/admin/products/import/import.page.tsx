import React, { FunctionComponent } from "react";
import { SideNavigation } from "../../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../../common";
import { Routes } from "../../../../utils";
import ImportForm from "./import.form";
import { observer } from "mobx-react";

export const ImportPage: FunctionComponent = observer(() => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink route={Routes.Home.path}>Home</NavigationLink>
        <NavigationLink route={Routes.Admin.Home.path}>Admin</NavigationLink>
        <NavigationLink>Import</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <SideNavigation />
        <ImportForm />
      </ContentPane>
    </ContentPane>
  );
});
