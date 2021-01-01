import React, { FunctionComponent } from "react";
import { Pane, Heading, Text } from "evergreen-ui";

interface Props {
  title?: string;
  description?: string;
  required?: boolean;

  children?: React.ReactChildren;
}

export const Field: FunctionComponent<Props> = ({
  title,
  description,
  children,
  required = false,
}: Props) => {
  return (
    <Pane>
      {title && (
        <Heading>
          {title} {required && "*"}
        </Heading>
      )}

      {description && <Heading>{description}</Heading>}
      <Pane>{children}</Pane>
    </Pane>
  );
};
