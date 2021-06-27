import React, { FunctionComponent, useState } from "react";
import { Pane, Paragraph, SearchInput, Table, Text } from "evergreen-ui";
import { get } from "lodash";
import fuzzaldrin from "fuzzaldrin-plus";

interface Props {
  data: Record<string, any>[];
  loading?: boolean;
  emptyMessage?: string;

  columns: {
    title: string;
    key: string;
    path: string;

    default?: string;
    render?: (data: Record<string, any>) => void;
  }[];
}

export const SearchableTable: FunctionComponent<Props> = ({
  loading,
  data,
  columns,
  emptyMessage = "No results",
}: Props) => {
  const [search, setSearch] = useState("");
  if (loading) {
    data = [{}, {}, {}, {}];
  }

  let filtered: any[] = [];
  if (search) {
    filtered = fuzzaldrin.filter(data, search, { key: columns[0].path });
  } else {
    filtered = data;
  }

  return (
    <React.Fragment>
      <SearchInput
        marginBottom={8}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) => setSearch(value)}
      />
      <Table>
        <Table.Head>
          {columns.map((column, index) => (
            <Table.HeaderCell key={`table-header-${index}`}>
              <Text>{column.title}</Text>
            </Table.HeaderCell>
          ))}
        </Table.Head>
        <Table.Body>
          {filtered.length === 0 && (
            <Pane width="100%" marginY={32}>
              <Paragraph color="muted" textAlign="center">
                {emptyMessage}
              </Paragraph>
            </Pane>
          )}
          {filtered.map((each, i) => (
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
      <Text marginTop={8}>{loading ? 0 : data.length} Rows</Text>
    </React.Fragment>
  );
};
