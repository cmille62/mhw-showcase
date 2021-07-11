import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Pane, Spinner } from "evergreen-ui";
import {
  Input,
  TextareaField,
  AsyncMultiSelectField,
  ControlPane,
  ListField,
} from "../../common";
import { Schema } from "./collection.schema";
import { RouteComponentProps } from "react-router";
import { CollectionAPI } from "../../../services";
import { Routes, structureRoute } from "../../../utils";
import { cloneDeep, get, set } from "lodash";

type Props = RouteComponentProps<{ collection: string; id: string }>;

export const CollectionEdit: FunctionComponent<Props> = ({ match }: Props) => {
  const { collection, id } = match.params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const schema = Schema[collection];

  useEffect(() => {
    if (id === "new") {
      setLoading(false);
    } else {
      CollectionAPI.get(collection, id).then((result) => {
        setData(result.data || {});
        setLoading(false);
      });
    }
  }, []);

  const update = (value: any, path: string) => {
    const cloned = cloneDeep(data);
    set(cloned, path, value);
    setData(cloned);
  };

  console.log(data);

  return (
    <Pane width={425} marginX="auto">
      {schema.map(({ type, ...each }) => {
        const props = {
          key: each.path,
          value: get(data, each.path, ""),
          onChange: (value: any) => update(value, each.path),
        };
        switch (type) {
          case "textarea":
            return <TextareaField {...{ ...props, ...each }} />;
          case "list":
            return <ListField {...{ ...props, ...each }} />;
          case "distinct":
            return (
              <AsyncMultiSelectField
                {...{ ...props, ...each }}
                fetchValues={async () => {
                  const result = await CollectionAPI.distinct(
                    collection,
                    each.path
                  );

                  return result.data || [];
                }}
              />
            );
          default:
            return <Input {...{ ...props, ...each }} />;
        }
      })}

      <ControlPane marginY={32}>
        <Button
          is="a"
          href={structureRoute(Routes.Admin.Collection.Router, {
            collection,
          })}
        >
          Cancel
        </Button>
        <Button
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            if (id === "new") {
              await CollectionAPI.post(collection, data);
            } else {
              await CollectionAPI.put(collection, id, data);
            }
            setLoading(false);
          }}
        >
          {data && loading && <Spinner size={16} />}
          Save
        </Button>
      </ControlPane>
    </Pane>
  );
};
