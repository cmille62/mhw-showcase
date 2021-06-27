import React, { FunctionComponent } from "react";
import { Link, Pane } from "evergreen-ui";
import { Routes } from "../../../utils";

export const PageFooter: FunctionComponent = () => {
  return (
    <Pane margin={16} display="flex">
      <Link href={Routes.Admin.Home.path}>Admin</Link>
    </Pane>
  );
};
