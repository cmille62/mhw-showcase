import React, { FunctionComponent, useState } from "react";
import { Button, Position, SideSheet } from "evergreen-ui";
import { FinderSchema } from "./type";
import { Finder } from "./finder";

interface Props {
  schema: FinderSchema;
}

export const FinderModal: FunctionComponent<Props> = (props: Props) => {
  const [isShown, setShown] = useState(false);

  return (
    <React.Fragment>
      <SideSheet
        position={Position.LEFT}
        width={340}
        isShown={isShown}
        onCloseComplete={() => setShown(false)}
        preventBodyScrolling
      >
        <Finder {...props} />
      </SideSheet>
      <Button onClick={() => setShown(true)}>Show Basic Side Sheet</Button>
    </React.Fragment>
  );
};
