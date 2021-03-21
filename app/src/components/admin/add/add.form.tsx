import React, { FunctionComponent } from "react";
import { Button, Heading, Pane, TextInput } from "evergreen-ui";
import { observer } from "mobx-react";

const fields = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "MFG Part Number", key: "mfgPartNumber", path: "mfgPartNumber" },
  { title: "UPC", key: "upc", path: "sku" },
];

const AddForm: FunctionComponent = observer(() => {
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
          Adding Products
        </Heading>
      </Pane>
    </Pane>
  );
});

export default AddForm;
