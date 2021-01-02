import React, { FunctionComponent } from "react";
import { Card, Heading, Pane } from "evergreen-ui";
import { ContentPane } from "../contentPane";
import { DivProps } from "../../finder";

interface Props extends DivProps {
  title?: string;
}

export const Page: FunctionComponent<Props> = ({ title, ...props }: Props) => {
  return (
    <ContentPane>
      <Heading size={700} marginBottom={8} marginLeft={32}>
        {title}
      </Heading>
      <Card
        marginLeft={16}
        elevation={1}
        width="100%"
        minHeight={600}
        borderRadius={32}
        padding={32}
        {...props}
      >
        <Pane>{props.children}</Pane>
      </Card>
    </ContentPane>
  );
};
