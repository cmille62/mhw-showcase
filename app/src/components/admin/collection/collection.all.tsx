import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { CollectionAPI } from "../../../services";
import {
  AddIcon,
  Heading,
  IconButton,
  Link,
  Pane,
  ResetIcon,
} from "evergreen-ui";
import { DeleteModal, Table } from "../../common";
import { observer } from "mobx-react";
import { startCase } from "lodash";
import { Routes, structureRoute } from "../../../utils";

type Props = RouteComponentProps<{ collection: string }>;

const icon = {
  marginX: 4,
};

export const CollectionViewAll: FunctionComponent<Props> = observer(
  ({ match }: Props) => {
    const { collection } = match.params;
    const [loading, setLoading] = useState(true);
    const [reset, setReset] = useState(false);
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
        <DeleteModal
          shown={reset}
          title={`Reset the ${collection} collection`}
          description={`all documents within the ${collection} collection, and reset to the default`}
          onDelete={() => CollectionAPI.reset(collection)}
          onClose={() => setReset(false)}
        />
        <Pane display="flex" flexDirection="row">
          <Heading size={800} marginBottom={10}>
            Collection: {startCase(collection)}
          </Heading>
        </Pane>

        <Table
          {...{ loading, columns, data }}
          link={(each: any) =>
            structureRoute(Routes.Admin.Collection.Edit, {
              collection,
              id: each._id,
            })
          }
        >
          <Pane width="100%" display="flex" justifyContent="flex-end">
            <IconButton
              icon={AddIcon}
              {...icon}
              is={Link}
              href={structureRoute(Routes.Admin.Collection.Edit, {
                collection,
                id: "new",
              })}
            />
            <IconButton
              icon={ResetIcon}
              {...icon}
              onClick={() => setReset(true)}
            />
          </Pane>
        </Table>
      </Pane>
    );
  }
);
