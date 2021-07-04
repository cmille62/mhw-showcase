import React, { FunctionComponent } from "react";
import { Alert } from "evergreen-ui";
import { Page } from "../../common";

export const HomeContent: FunctionComponent = () => {
  return (
    <Page>
      <Alert
        width="100%"
        intent="success"
        title="Application is running normally"
      />
    </Page>
  );
};
