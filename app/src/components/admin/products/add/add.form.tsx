import React, { FunctionComponent, useState } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Page } from "../../../common";
import { ProductLookup } from "./product.lookup";
import { AddProductChecks } from "./add.checks";

const AddForm: FunctionComponent = observer(() => {
  const [upc, setUPC] = useState("");
  const [sku, setSKU] = useState("");
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
      <Page>
        <ProductLookup
          setUPC={(upc: string) => setUPC(upc)}
          setSKU={(sku: string) => setSKU(sku)}
        />
        <AddProductChecks {...{ upc, sku }} />
      </Page>
    </Pane>
  );
});

export default AddForm;
