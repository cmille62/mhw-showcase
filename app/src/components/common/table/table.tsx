import React, { FunctionComponent } from "react";
import { SearchInput, Table, Text } from "evergreen-ui";
import { get } from "lodash";

interface Props {
  data: Record<string, any>[];
  columns: {
    title: string;
    key: string;
    path: string;

    default?: string;
    render?: (data: Record<string, any>) => void;
  }[];
}

export const SearchableTable: FunctionComponent<Props> = ({
  data,
  columns,
}: Props) => {
  return (
    <React.Fragment>
      <SearchInput marginBottom={8} />
      <Table>
        <Table.Head>
          {columns.map((column, index) => (
            <Table.HeaderCell key={`table-header-${index}`}>
              <Text>{column.title}</Text>
            </Table.HeaderCell>
          ))}
        </Table.Head>
        <Table.Body>
          {data.map((each, i) => (
            <Table.Row key={`table-row-${i}`}>
              {columns.map((column, index) => (
                <Table.Cell key={`table-cell-${index}`}>
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
