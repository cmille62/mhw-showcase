import React, { FunctionComponent } from "react";
import { SearchInput, Table, Text } from "evergreen-ui";
import { get } from "lodash";

interface Props {
  data: Object[];
  columns: {
    title: string;
    key: string;
    path: string;

    default?: string;
    render?: (data: Object) => void;
  }[];
}

export const SearchableTable: FunctionComponent<Props> = ({
  data,
  columns,
}: Props) => {
  return (
    <React.Fragment>
      <SearchInput />
      <Table>
        <Table.Head>
          {columns.map((column) => (
            <Table.HeaderCell>
              <Text>{column.title}</Text>
            </Table.HeaderCell>
          ))}
        </Table.Head>
        <Table.Body>
          {data.map((each) => (
            <Table.Row>
              {columns.map((column) => (
                <Table.Cell>
                  {column.render ? (
                    column.render
                  ) : (
                    <Text>{get(each, column.path, column.default || "")}</Text>
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Text>{data.length} Rows</Text>
    </React.Fragment>
  );
};
