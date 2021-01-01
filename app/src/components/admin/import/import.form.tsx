import * as React from "react";
import { Button, Heading, Pane } from "evergreen-ui";
import { inject, observer } from "mobx-react";
import { ImportStore } from "../../../stores";
import { Table } from "../../common/table";

interface Props {
  importStore: ImportStore;
}

const columns = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "UPC", key: "upc", path: "sku" },
  { title: "Description", key: "description", path: "sku" },
];

@inject("importStore")
@observer
class ImportForm extends React.Component<Props, {}> {
  render() {
    const { preview } = this.props.importStore;
    return (
      <Pane
        id="settingsPane"
        display="flex"
        flexDirection="column"
        marginBottom="auto"
        marginLeft={20}
      >
        <Pane display="flex" flexDirection="row">
          <Heading size={800} marginBottom={10}>
            Import Products
          </Heading>
          <Button
            id="update"
            appearance="primary"
            fontSize={12}
            marginLeft="auto"
            marginBottom={10}
            onClick={() => {
              // this.setSettings();
            }}
          >
            Import
          </Button>
        </Pane>
        <Table {...{columns, data: preview.data}} />
      </Pane>
    );
  }
}

export default ImportForm;
