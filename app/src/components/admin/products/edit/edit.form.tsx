import React, { FunctionComponent, useEffect, useState } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Page } from "../../../common";
import { useRootStore } from "../../../../stores";
import { Product } from "../../../../typings";
import { cloneDeep, get, set } from "lodash";
import { fetchFields } from "../../../../utils";
import { InputController } from "./controller";
import { toJS } from "mobx";

interface Props {
  id?: string;
  product?: any;
}

export const EditForm: FunctionComponent<Props> = observer(
  ({ id, ...props }: Props) => {
    const { productStore } = useRootStore();

    // const [product, setProduct] = useState<Product | { [key: string]: any }>(
    //   productStore.selected || {}
    // );

    const product: Partial<Product> = productStore.selected || {};
    const fields = fetchFields(product.category);

    console.log(toJS(product));

    useEffect(() => {
      if (!productStore.selected) {
        const result = props.product || {};
        productStore.select(result);
        // setProduct(result);
      } else {
        //TODO: Fetch from id
      }
    }, [id]);

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
            <Pane marginY={8} key={`input-${index}`}>
              <InputController
                {...{
                  field,
                  value: get(product, field.path),
                  update: (value) => {
                    const cloned: Product = cloneDeep(product) as Product;
                    set(cloned, field.path, value);
                    productStore.select(cloned);
                  },
                }}
              />
            </Pane>
          ))}
        </Page>
      </Pane>
    );
  }
);
