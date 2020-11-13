import React from 'react';
import { Pane, Spinner, Text } from 'evergreen-ui';

export const Loading = () => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <Spinner size={50} />
      <Text marginTop={5} size={600}>
        Loading...
      </Text>
    </Pane>
  );
};
