import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { CollectionAPI } from "../../../services";
import { Heading, Pane } from "evergreen-ui";
import { Table } from "../../common";
import { observer } from "mobx-react";
import { startCase } from "lodash";

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

    const columns = [
      { title: startCase(collection), key: collection, path: collection },
      { title: "Description", key: "description", path: "description" },
    ];

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
