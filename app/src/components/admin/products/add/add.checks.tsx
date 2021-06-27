import React, { FunctionComponent, useEffect, useState } from "react";
import { Pane } from "evergreen-ui";
import { APICheck } from "../../../common";
import { useRootStore } from "../../../../stores";
import { BRServiceAPI } from "../../../../services";

interface Props {
  upc?: string;
  sku?: string;
}

export const AddProductChecks: FunctionComponent<Props> = ({
  sku,
  upc,
}: Props) => {
  const { productStore } = useRootStore();
  const [product, setProduct] = useState();
  const [findCheck, setCheck] = useState(false);

  useEffect(() => {
    findCheck && setCheck(false);
  }, [upc, sku, findCheck]);

  console.log(findCheck, upc);

  return (
    <Pane>
      {upc && (
        <APICheck
          title="New Product UPC"
          request={async () => {
            const result = await productStore.getByUPC(upc);
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
      {findCheck && upc && (
        <APICheck
          title="Big Rocks Fetch"
          request={async () => {
            const result = await BRServiceAPI.getByUPC(upc);
            if (result.data) {
              setProduct(result.data);
            }
            return result.status;
          }}
        />
      )}
      {findCheck && sku && (
        <APICheck
          title="Big Rocks Fetch"
          request={async () => {
            const result = await BRServiceAPI.getByPartNumber(sku);
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
