import React, { FunctionComponent, useState, useEffect } from "react";
import { Button, Card, Pane, Heading, Paragraph } from "evergreen-ui";
import { FinderSchema } from "./type";

import "./style.scss";

interface Props {
  schema: FinderSchema;
}

export const Finder: FunctionComponent<Props> = (props: Props) => {
  const [amount, setAmount] = useState<number | undefined>();

  return (
    <React.Fragment>
      <Pane className="finder-heading">
        <Pane>
          <Heading>Product Finder</Heading>
        </Pane>
        <Paragraph>Narrow search results by category</Paragraph>
      </Pane>
      <Pane className="finder-body" background="tint1">
        <Card elevation={0}>
          <Pane className="matching">
            <Heading>{typeof amount === "undefined" ? "--" : amount}</Heading>
            <Heading>Matching Items</Heading>
          </Pane>
        </Card>
      </Pane>
      <Pane className="finder-controls">
        <Button>Reset</Button>
        <Button>Show Results</Button>
      </Pane>
    </React.Fragment>
  );
};
