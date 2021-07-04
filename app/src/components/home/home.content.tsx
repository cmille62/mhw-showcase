import { Link } from "evergreen-ui";
import React, { FunctionComponent } from "react";
import { Routes } from "../../utils";
import { Page } from "../common";

export const HomeContent: FunctionComponent = () => {
  return (
    <Page>
      <Link href={Routes.Showcase.path}>Showcase</Link>
    </Page>
  );
};
