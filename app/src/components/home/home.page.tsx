import React, { FunctionComponent } from "react";
import { ContentPane, Navigation, NavigationLink } from "../common";

export const HomePage: FunctionComponent = () => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink>Home</NavigationLink>
      </Navigation>
    </ContentPane>
  );
};

export default HomePage;
