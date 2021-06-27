import React, { FunctionComponent } from "react";
import { Link, Pane } from "evergreen-ui";

export const PageFooter: FunctionComponent = () => {
  return (
    <Pane>
      <Link href="/admin">Admin</Link>
    </Pane>
  );
};
