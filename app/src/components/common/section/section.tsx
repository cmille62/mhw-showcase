import React, { FunctionComponent } from "react";
import { Pane, Heading, Text } from "evergreen-ui";
import { DivProps } from "../../../typings";

interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;

  style?: DivProps;
}

export const Section: FunctionComponent<Props> = ({
  children,
  title,
  subtitle,
  style,
}: Props) => {
  return (
    <Pane>
      <Pane display="flex" flexDirection="row">
        {title && <Heading>{title}</Heading>}
        {subtitle && <Text>{subtitle}</Text>}
      </Pane>
      <Pane display="flex" {...(style || {})}>
        {children}
      </Pane>
    </Pane>
  );
};
