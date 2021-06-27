import React, { FunctionComponent, useEffect, useState } from "react";
import { Pane } from "evergreen-ui";
import { APICheck } from "../../../common";
import { useRootStore } from "../../../../stores";
import { BRServiceAPI } from "../../../../services";
import { PRODUCT_LOOKUP } from "../../../../typings";

interface Props {
  value: string;
  type: string;
}

export const AddProductChecks: FunctionComponent<Props> = ({
  value,
  type,
}: Props) => {
  const { productStore } = useRootStore();
  const [product, setProduct] = useState();
  const [findCheck, setCheck] = useState(false);

  useEffect(() => {
    findCheck && setCheck(false);
  }, [type, value, findCheck]);

  console.log(findCheck, value);

  return (
    <Pane>
      {type === PRODUCT_LOOKUP.UPC && (
        <APICheck
          title="New Product UPC"
          request={async () => {
            const result = await productStore.getByUPC(value);
            console.log(result);
            if (result && result.data) {
              setProduct(result.data);
            } else {
              setCheck(true);
            }
            return result.data ? 400 : result.status;
          }}
        />
      )}
      {findCheck && type === PRODUCT_LOOKUP.UPC && (
        <APICheck
          title="Big Rocks Fetch"
          request={async () => {
            const result = await BRServiceAPI.getByUPC(value);
            if (result.data) {
              setProduct(result.data);
            }
            return result.status;
          }}
        />
      )}
      {findCheck && type === PRODUCT_LOOKUP.SKU && (
        <APICheck
          title="Big Rocks Fetch"
          request={async () => {
            const result = await BRServiceAPI.getByPartNumber(value);
            if (result.data) {
              setProduct(result.data);
            }
            return result.status;
          }}
        />
      )}
    </Pane>
  );
};
