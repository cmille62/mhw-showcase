import React, { FunctionComponent, useState } from "react";
import { ArrowRightIcon, Heading, Pane, IconButton } from "evergreen-ui";
import { observer } from "mobx-react";
import { APICheck, Page } from "../../../common";
import { ProductLookup } from "./product.lookup";
import { AddProductChecks } from "./add.checks";
import { Link } from "react-router-dom";
import { Routes } from "../../../../utils";

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

        <APICheck request={() => Promise.resolve(200)} title="Hey!">
          <IconButton
            appearance="minimal"
            is="a"
            href={Routes.Admin.Products.Create.path}
            icon={ArrowRightIcon}
          />
        </APICheck>
      </Page>
    </Pane>
  );
});

export default AddForm;
