import React, { FunctionComponent } from "react";
import { ShowcaseContent } from "./showcase.content";
import { Pane, Text } from "evergreen-ui";
import {
  ContentPane,
  Navigation,
  NavigationLink,
  PreferencesList,
} from "../common";
import { RouteComponentProps } from "react-router";
import { parsePaginationQuery } from "../../utils";

type Props = RouteComponentProps;

export const ShowcasePage: FunctionComponent<Props> = ({ location }: Props) => {
  const props = parsePaginationQuery(location);

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
        <ShowcaseContent {...props} />
      </ContentPane>
    </ContentPane>
  );
};

export default ShowcasePage;
