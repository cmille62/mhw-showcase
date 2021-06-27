import React, { FunctionComponent } from "react";
import { Pane, Text } from "evergreen-ui";
import {
  ContentPane,
  Navigation,
  NavigationLink,
  Page,
  PreferencesList,
} from "../common";

export const ShowcasePage: FunctionComponent = () => {
  return (
    <ContentPane>
      <Navigation>
        <NavigationLink>Showcase</NavigationLink>
      </Navigation>
      <ContentPane flexDirection="row">
        <Pane>
          <Text color="muted">
            Showing {} - {} of {}{" "}
          </Text>
          <PreferencesList />
        </Pane>
        <Page></Page>
      </ContentPane>
    </ContentPane>
  );
};

export default ShowcasePage;
