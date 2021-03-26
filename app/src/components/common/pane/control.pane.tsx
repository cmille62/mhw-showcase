import React, { FunctionComponent } from "react";
import { Pane } from "evergreen-ui";
import { DivProps } from "../../../typings";

interface Props {
  children: React.ReactNode;

  style?: DivProps;
}

export const ControlPane: FunctionComponent<Props> = ({
  children,
  style,
}: Props) => {
  return (
    <Pane display="flex" justifyContent="space-between" {...(style || {})}>
      {children}
    </Pane>
  );
};
