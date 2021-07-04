import React, { FunctionComponent } from "react";
import { Card, Paragraph, Text } from "evergreen-ui";
import { Product } from "../../typings";

type Props = Product;

export const ShowcaseItem: FunctionComponent<Props> = (props: Props) => {
  return (
    <Card>
      <Paragraph>{props.description}</Paragraph>
    </Card>
  );
};
