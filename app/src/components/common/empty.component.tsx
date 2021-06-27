import React, { FunctionComponent } from "react";
import { Paragraph } from "evergreen-ui";

interface Props {
  message?: string;
}

export const Empty: FunctionComponent<Props> = ({
  message = "There is no results currently",
}: Props) => {
  return (
    <Paragraph textAlign="center" color="muted" marginY={32}>
      {message}
    </Paragraph>
  );
};
