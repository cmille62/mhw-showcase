import React, { FunctionComponent } from "react";
import { Button, Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { useRootStore } from "../../../stores";
import { Table } from "../../common/table";
import { FileUploadButton } from "../../common/inputs";

const columns = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "UPC", key: "upc", path: "sku" },
  { title: "Description", key: "description", path: "sku" },
];

const ImportForm: FunctionComponent = observer(() => {
  const { importStore } = useRootStore();
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
          Import Products
        </Heading>
        <FileUploadButton
          title="Import"
          accept=".csv"
          onChange={(event) => {
            // const response = await uploadFiles(files, onUploadProgress, max);
          }}
        />
      </Pane>
      <Table {...{ columns, data: importStore.preview.data }} />
    </Pane>
  );
});

export default ImportForm;
