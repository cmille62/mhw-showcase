import React, { FunctionComponent } from "react";
import { ContentPane, Navigation, NavigationLink } from "../common";
import { HomeContent } from "./home.content";

export const HomePage: FunctionComponent = () => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink>Home</NavigationLink>
      </Navigation>
      <HomeContent />
    </ContentPane>
  );
};

export default HomePage;
