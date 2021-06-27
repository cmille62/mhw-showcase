import React, { FunctionComponent, useEffect, useState } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Input, Page } from "../../../common";
import { useRootStore } from "../../../../stores";
import { Product } from "../../../../typings";

const fields = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "MFG Part Number", key: "mfgPartNumber", path: "mfgPartNumber" },
  { title: "UPC", key: "upc", path: "upc" },
  { title: "Title", key: "title", path: "title" },
  { title: "Category", key: "category", path: "category" },
  { title: "Manufacturer", key: "manufacturer", path: "manufacturer" },
  {
    title: "Description",
    key: "description",
    path: "description",
    type: "textarea",
  },
];

interface Props {
  id?: string;
}

export const EditForm: FunctionComponent<Props> = observer(({ id }: Props) => {
  const { productStore } = useRootStore();

  const [product, setProduct] = useState<Product | { [key: string]: any }>(
    productStore.selected || {}
  );

  useEffect(() => {
    if (!productStore.selected) {
      const result = {};
      setProduct(result);
    } else {
      //TODO: Fetch from id
    }
  }, [id, productStore.selected]);

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
          Edit Product
        </Heading>
      </Pane>
      <Page>
        {Object.values(fields).map((field) => {
          return <Input title={field.title} value={product[field.path]} />;
        })}
      </Page>
    </Pane>
  );
});
