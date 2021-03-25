import React, { FunctionComponent } from "react";
import { Pane, Heading } from "evergreen-ui";
import { DivProps } from "../../../typings";

export interface FieldProps {
  title?: string;
  description?: string;
  required?: boolean;
  props?: DivProps;
}

interface Props extends FieldProps {
  children?: React.ReactNode;
}

export const Field: FunctionComponent<Props> = ({
  title,
  description,
  children,
  required = false,
  props,
}: Props) => {
  return (
    <Pane {...props}>
      {title && (
        <Heading>
          {title} {required && "*"}
        </Heading>
      )}

      {description && <Heading>{description}</Heading>}
      <Pane width="100%">{children}</Pane>
    </Pane>
  );
};
