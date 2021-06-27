import React, { FunctionComponent } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Table } from "../../../common";
import { useRootStore } from "../../../../stores";

const columns = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "UPC", key: "upc", path: "sku" },
  { title: "Description", key: "description", path: "sku" },
];

export const ViewAllForm: FunctionComponent = observer(() => {
  const { productStore } = useRootStore();
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
          Products
        </Heading>
      </Pane>

      <Table {...{ columns, data: productStore.products }} />
    </Pane>
  );
});
