import React, { FunctionComponent, useEffect, useState } from "react";
import { ArrowRightIcon, Icon, Pane } from "evergreen-ui";
import { APICheck } from "../../../common";
import { useRootStore } from "../../../../stores";
import { BRServiceAPI } from "../../../../services";
import { PRODUCT_LOOKUP } from "../../../../typings";
import { Routes } from "../../../../utils";
import { Link } from "react-router-dom";

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

  console.log(product);

  const children = product ? (
    <Link
      to={{ pathname: Routes.Admin.Products.Create.path, state: { product } }}
    >
      <Icon icon={ArrowRightIcon} />
    </Link>
  ) : null;

  return (
    <Pane>
      {type === PRODUCT_LOOKUP.UPC && (
        <APICheck
          title="New Product"
          request={async () => {
            const result = await productStore.getBy(value, type);
            console.log(result);
            if (result && result.status === 200 && result.data) {
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
          {...{ children }}
          title="Fetch by UPC"
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
          {...{ children }}
          title="Fetch by SKU"
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
