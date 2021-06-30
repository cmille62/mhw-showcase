import React, { FunctionComponent, useEffect, useState } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Page } from "../../../common";
import { useRootStore } from "../../../../stores";
import { Product } from "../../../../typings";
import { cloneDeep, get, set } from "lodash";
import { fetchFields } from "../../../../utils";
import { InputController } from "./controller";
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

    const fields = fetchFields(product.category);

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
          {Object.values(fields).map((field, index) => (
            <InputController
              key={`input-${index}`}
              {...{
                field,
                value: get(product, field.path),
                update: (value) => {
                  const cloned = cloneDeep(product);
                  set(cloned, field.path, value);
                  setProduct(cloned);
                },
              }}
            />
          ))}
        </Page>
      </Pane>
    );
  }
);
