import React, { FunctionComponent, useState } from "react";
import { Button, Card, Pane, Heading, Paragraph } from "evergreen-ui";
import { FinderSchema, FinderSearchableSchema } from "./type";

import "./style.scss";
import { Dropdown } from "./inputs";
import { DropdownProps } from "./inputs/dropdown";

interface Props {
  schema: FinderSchema;
}

export const Finder: FunctionComponent<Props> = ({ schema }: Props) => {
  const [amount, setAmount] = useState<number | undefined>();
  const { search } = schema;

  const onChange = (value: string, path: string) => {
    console.log(value, path);
  };
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
          {search.map((option: FinderSearchableSchema, index: number) => {
            const { path, props, input } = option;

            const inputProps = {
              key: `finder-${index}`,
              onChange: (value: any) => onChange(value, path),
              ...props,
            };

            switch (input) {
              case "Dropdown":
                return <Dropdown {...inputProps as DropdownProps} />;
            }
          })}
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
