import React, { FunctionComponent } from "react";
import { ContentPane, Navigation, NavigationLink } from "../../common";
import { Routes } from "../../../utils";
import { observer } from "mobx-react";
import { HomeContent } from "./home.content";

export const HomePage: FunctionComponent = observer(() => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink route={Routes.Home.path}>Home</NavigationLink>
        <NavigationLink route={Routes.Docs.Home.path}>Docs</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <HomeContent />
      </ContentPane>
    </ContentPane>
  );
});
