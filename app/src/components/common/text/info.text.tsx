import React, { FunctionComponent } from "react";
import { Card, Heading, Paragraph, Pane } from "evergreen-ui";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const InfoText: FunctionComponent<Props> = ({
  title,
  description,
  children,
}: Props) => {
  return (
    <Card>
      <Pane borderBottom="muted">
        <Heading>{title}</Heading>
      </Pane>
      <Pane>
        <Paragraph>{description}</Paragraph>
        {children}
      </Pane>
    </Card>
  );
};
