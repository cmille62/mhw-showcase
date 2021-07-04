import React, { FunctionComponent } from "react";
import { Pane, Text } from "evergreen-ui";
import { Page } from "../common";
import { PaginationQueryType } from "../../utils/pagination";
import { useRootStore } from "../../stores";
import { observer } from "mobx-react";

type Props = PaginationQueryType;

export const ShowcaseContent: FunctionComponent<Props> = observer(
  ({ size, page, query, order, orderBy }: Props) => {
    const { productStore } = useRootStore();
    return <Page>{productStore.count}</Page>;
  }
);
