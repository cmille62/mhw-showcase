import React, { FunctionComponent } from "react";
import { Card, Heading, Pane } from "evergreen-ui";
import { ContentPane, PageFooter } from "../index";
import { DivProps } from "../../../typings";

interface Props extends DivProps {
  title?: string;
}

export const Page: FunctionComponent<Props> = ({ title, ...props }: Props) => {
  return (
    <ContentPane>
      <Heading size={600} marginBottom={8} marginLeft={32}>
        {title}
      </Heading>
      <Card
        marginLeft={16}
        elevation={1}
        width="100%"
        minHeight={600}
        padding={32}
        background="white"
        {...props}
      >
        <Pane>{props.children}</Pane>
      </Card>
      <PageFooter />
    </ContentPane>
  );
};
