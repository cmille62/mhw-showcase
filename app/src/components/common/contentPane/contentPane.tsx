import React from 'react';
import { Pane } from 'evergreen-ui';

declare type Props = {
  maxWidth?: number;
  flexDirection?: 'row' | 'column';
  children?: React.ReactNode;
};

export const ContentPane: React.FunctionComponent<Props> = (props: Props) => (
  <Pane display="flex" flex={1}>
    <Pane
      display="flex"
      flex={1}
      maxWidth={props.maxWidth ? props.maxWidth : 1000}
      flexDirection={props.flexDirection ? props.flexDirection : 'column'}
      marginLeft="auto"
      marginRight="auto"
    >
      {props.children}
    </Pane>
  </Pane>
);

export default ContentPane;
