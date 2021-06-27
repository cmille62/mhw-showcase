import React, { FunctionComponent } from "react";
import { SideNavigation } from "../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../common";
import { Routes } from "../../../utils";
import { observer } from "mobx-react";

interface Props {
  children: React.ReactNode;
}

export const CollectionPage: FunctionComponent<Props> = observer(
  ({ children }: Props) => {
    return (
      <ContentPane>
        <Navigation>
          <NavigationLink route={Routes.Home.path}>Home</NavigationLink>
          <NavigationLink route={Routes.Admin.Home.path}>Admin</NavigationLink>
          <NavigationLink>Collection</NavigationLink>
        </Navigation>
        <ContentPane flexDirection="row">
          <SideNavigation />
          {children}
        </ContentPane>
      </ContentPane>
    );
  }
);
