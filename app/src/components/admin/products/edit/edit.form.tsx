import React, { FunctionComponent, useEffect } from "react";
import { Button, Heading, Pane } from "evergreen-ui";
import { ProductAPI } from "../../../../services";
import { useRootStore } from "../../../../stores";
import { fetchFields } from "../../../../utils";
import { Product } from "../../../../typings";
import { InputController } from "./controller";
import { cloneDeep, get, set } from "lodash";
import { Page } from "../../../common";
import { observer } from "mobx-react";
import { toJS } from "mobx";

interface Props {
  id?: string;
  product?: any;
}

export const EditForm: FunctionComponent<Props> = observer(
  ({ id, ...props }: Props) => {
    const { productStore } = useRootStore();
    const product: Partial<Product> = productStore.selected || {};
    const fields = fetchFields(product.category);

    console.log(id, toJS(product));

    useEffect(() => {
      if (id) {
        ProductAPI.getByID(id).then((result) => {
          productStore.select(result.data);
        });
      } else if (!productStore.selected) {
        const result = props.product || {};
        productStore.select(result);
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
          <Button onClick={() => productStore.save()}>Save</Button>
        </Page>
      </Pane>
    );
  }
);
