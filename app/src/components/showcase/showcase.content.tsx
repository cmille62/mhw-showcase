import React, { FunctionComponent } from "react";
import { Page } from "../common";
import { PaginationQueryType } from "../../utils";
import { useRootStore } from "../../stores";
import { observer } from "mobx-react";
import { ShowcaseItem } from "./showcase.item";

type Props = PaginationQueryType;

export const ShowcaseContent: FunctionComponent<Props> = observer(
  ({ size, page, query, order, orderBy }: Props) => {
    const { productStore } = useRootStore();
    return (
      <Page>
        {productStore.count}

        {productStore.products.map((each) => (
          <ShowcaseItem key={each._id} {...each} />
        ))}
      </Page>
    );
  }
);
