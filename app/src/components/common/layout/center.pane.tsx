import React, { FunctionComponent } from "react";
import { Pane } from "evergreen-ui";
import { DivProps } from "../../../typings";

interface Props extends DivProps {
  children: React.ReactNode;
}

export const CenterPane: FunctionComponent<Props> = ({
  children,
  ...props
}: Props) => {
  return (
    <Pane display="flex" alignItems="center" {...props}>
      {children}
    </Pane>
  );
};
