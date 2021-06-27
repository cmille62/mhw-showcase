import React, { FunctionComponent, useEffect, useState } from "react";
import { Heading, Pane } from "evergreen-ui";
import { observer } from "mobx-react";
import { Table } from "../../common/table";
import { useRootStore } from "../../../stores";
import { RouteComponentProps } from "react-router";
import { startCase } from "lodash";
import { CollectionAPI } from "../../../services";

const columns = [
  { title: "SKU", key: "sku", path: "sku" },
  { title: "UPC", key: "upc", path: "sku" },
  { title: "Description", key: "description", path: "sku" },
];

type Props = RouteComponentProps<{ collection: string }>;

export const CollectionViewAll: FunctionComponent<Props> = observer(
  ({ match }: Props) => {
    const { collection } = match.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      !loading && setLoading(true);

      CollectionAPI.getAll(collection).then((result) => {
        setData(result.data || []);
        setLoading(false);
      });
    }, [collection]);

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
            Collection: {startCase(collection)}
          </Heading>
        </Pane>

        <Table {...{ loading, columns, data }} />
      </Pane>
    );
  }
);
