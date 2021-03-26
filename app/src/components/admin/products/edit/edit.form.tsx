import React, { FunctionComponent } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Page } from "../../../common";

const fields = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "MFG Part Number", key: "mfgPartNumber", path: "mfgPartNumber" },
  { title: "UPC", key: "upc", path: "upc" },
];

export const EditForm: FunctionComponent = observer(() => {
  return (
    <Pane
      id="settingsPane"
      display="flex"
      flexDirection="column"
      marginBottom="auto"
      marginLeft={20}
      width="100%"
    >
      <Pane display="flex" flexDirection="row">
        <Heading size={800} marginBottom={10}>
          Edit By UPC
        </Heading>
      </Pane>
      <Page></Page>
    </Pane>
  );
});
