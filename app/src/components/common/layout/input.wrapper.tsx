import React, { FunctionComponent } from "react";
import { DivProps } from "../../../typings";
import { Icon, Pane } from "evergreen-ui";

import "./input.wrapper.scss";

interface Props extends DivProps {
  children: React.ReactNode;

  iconAfter?: React.ElementType<any> | JSX.Element;
  iconBefore?: React.ElementType<any> | JSX.Element;
}

const p = {
  display: "flex",
  alignSelf: "stretch",
  alignItems: "center",
  paddingX: 8,
};

const i = {
  size: 16,
  color: "muted",
};

export const InputWrapper: FunctionComponent<Props> = ({
  children,
  iconAfter,
  iconBefore,
  ...props
}: Props) => {
  return (
    <Pane display="flex" border="muted" borderRadius={4} {...props}>
      {iconBefore && (
        <Pane {...p} borderRight="muted">
          <Icon icon={iconBefore} {...i} />
        </Pane>
      )}
      <Pane flex={1} className="input-wrapper">
        {children}
      </Pane>
      {iconAfter && (
        <Pane {...p} borderLeft="muted">
          <Icon icon={iconAfter} {...i} />
        </Pane>
      )}
    </Pane>
  );
};
