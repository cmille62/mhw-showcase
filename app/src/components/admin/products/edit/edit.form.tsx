import React, { FunctionComponent, useEffect, useState } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Input, Page } from "../../../common";
import { useRootStore } from "../../../../stores";
import { Product } from "../../../../typings";
import { cloneDeep } from "lodash";

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

const firearmFields = [
  { title: "Model", key: "model", path: "model" },
  { title: "Action", key: "action", path: "action" },
  { title: "Finish", key: "finish", path: "finish" },
  { title: "Capacity", key: "capacity", path: "capacity" },
];

const barreledFields = [
  { title: "Barrel Length", key: "barrelLength", path: "barrelLength" },
  { title: "Front Sight", key: "frontSight", path: "frontSight" },
  { title: "Rear Sight", key: "rearSight", path: "rearSight" },
  { title: "Caliber", key: "caliber", path: "caliber" },
];

const magazineField = [
  { title: "Magazine Qty", key: "magazineQty", path: "magazineQty" },
];

const tacticalField = [
  { title: "Rail", key: "rail", path: "rail" },
  { title: "Thread Pitch", key: "threadPitch", path: "threadPitch" },
  { title: "Muzzle Device", key: "muzzleDevice", path: "muzzleDevice" },

]

interface Props {
  id?: string;
  product?: any;
}

export const EditForm: FunctionComponent<Props> = observer(
  ({ id, ...props }: Props) => {
    const { productStore } = useRootStore();

    const [product, setProduct] = useState<Product | { [key: string]: any }>(
      productStore.selected || {}
    );

  console.log(product);

    useEffect(() => {
      if (!productStore.selected) {
        const result = props.product || {};
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
          {Object.values(fields).map((field, index) => {
            return (
              <Input
                key={`edit-form-${index}`}
                title={field.title}
                value={product[field.path]}
                onChange={(value) => {
                  const result = cloneDeep(product);
                  result[field.path] = value;
                  setProduct(result);
                }}
              />
            );
          })}
        </Page>
      </Pane>
    );
  }
);
