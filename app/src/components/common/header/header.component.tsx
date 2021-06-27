import React, { FunctionComponent } from "react";
import { Heading, Pane } from "evergreen-ui";

export const Header: FunctionComponent = () => {
  return (
    <Pane paddingX={30} paddingY={10} borderBottom="5px solid red">
      <Heading>Miller Hardware Showcase</Heading>
    </Pane>
  );
};
