import React, { FunctionComponent, useState } from "react";
import { ArrowRightIcon, Heading, Pane, IconButton } from "evergreen-ui";
import { observer } from "mobx-react";
import { APICheck, Page } from "../../../common";
import { ProductLookup } from "./product.lookup";
import { AddProductChecks } from "./add.checks";
import { Routes } from "../../../../utils";
import { ProductLookupOptions, PRODUCT_LOOKUP } from "../../../../typings";

const AddForm: FunctionComponent = observer(() => {
  const [value, setValue] = useState("");
  const [type, setType] = useState<ProductLookupOptions>(PRODUCT_LOOKUP.UPC);

  console.log(value, type);
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
          Adding Product
        </Heading>
      </Pane>
      <Page>
        <ProductLookup {...{ setValue, setType, value, type }} />
        {value && <AddProductChecks {...{ value, type }} />}

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
