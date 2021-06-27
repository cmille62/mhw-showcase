import React, { FunctionComponent } from "react";
import { ContentPane, Navigation, NavigationLink, Page } from "../common";

export const HomePage: FunctionComponent = () => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink>Home</NavigationLink>
      </Navigation>
      <Page />
    </ContentPane>
  );
};

export default HomePage;
