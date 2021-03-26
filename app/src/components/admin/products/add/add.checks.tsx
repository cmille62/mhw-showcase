import React, { FunctionComponent } from "react";
import { Pane } from "evergreen-ui";
import { APICheck } from "../../../common";
import { useRootStore } from "../../../../stores";

interface Props {
  upc?: string;
  sku?: string;
}

export const AddProductChecks: FunctionComponent<Props> = ({
  sku,
  upc,
}: Props) => {
  const { productStore } = useRootStore();
  return (
    <Pane>
      {upc && (
        <APICheck
          title="New Product UPC"
          request={async () => {
            const result = await productStore.getByUPC(upc);

            return result.status;
          }}
        />
      )}
    </Pane>
  );
};
