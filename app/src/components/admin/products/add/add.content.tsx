import React, { FunctionComponent, useState } from "react";
import { Card, Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Empty, Page } from "../../../common";
import { ProductLookup } from "./product.lookup";
import { AddProductChecks } from "./add.checks";
import { ProductLookupOptions, PRODUCT_LOOKUP } from "../../../../typings";

export const AddContent: FunctionComponent = observer(() => {
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
        <Card border="muted" marginTop={16}>
          {value && <AddProductChecks {...{ value, type }} />}
          {!value && <Empty message="Please Enter an Unique Identifier" />}
        </Card>
      </Page>
    </Pane>
  );
});
