import React, { FunctionComponent } from "react";
import {
  Card,
  Heading,
  Paragraph,
  Pane,
  UnorderedList,
  ListItem,
} from "evergreen-ui";
import { DocsType } from "../../../typings";

export const InfoText: FunctionComponent<DocsType> = ({
  title,
  description,
  examples,
}: DocsType) => {
  return (
    <Card background="tint1" padding={8} margin={16}>
      <Pane borderBottom="muted">
        <Heading>{title}</Heading>
      </Pane>
      <Pane>
        <Paragraph margin={16}>{description}</Paragraph>
        {examples && (
          <Pane marginX={32}>
            <UnorderedList>
              {examples.map((each) => (
                <ListItem key={each}>{each}</ListItem>
              ))}
            </UnorderedList>
          </Pane>
        )}
      </Pane>
    </Card>
  );
};
