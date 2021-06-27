import React, { FunctionComponent } from "react";
import { Heading } from "evergreen-ui";
import { Page } from "../../common";
import { version } from "../../../version";

export const VersionContent: FunctionComponent = () => {
  return (
    <Page>
      <Heading>Current version: {version}</Heading>
    </Page>
  );
};
