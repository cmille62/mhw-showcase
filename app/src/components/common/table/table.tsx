import React, { FunctionComponent, useState } from "react";
import {
  Link,
  Pane,
  Paragraph,
  SearchInput,
  Table,
  Text,
  Tooltip,
} from "evergreen-ui";
import { get } from "lodash";
import fuzzaldrin from "fuzzaldrin-plus";
import { truncate } from "../../../utils";

interface Props {
  data: Record<string, any>[];
  loading?: boolean;
  emptyMessage?: string;

  children?: React.ReactNode;

  link?: (doc: any) => string;
  columns: {
    title: string;
    key: string;
    path: string;

    default?: string;
    render?: (data: Record<string, any>) => void;
  }[];
}

export const SearchableTable: FunctionComponent<Props> = ({
  children,
  loading,
  link,
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
      <Pane display="flex">
        <SearchInput
          marginBottom={8}
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>) => setSearch(value)}
        />
        {children}
      </Pane>
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
                    <Tooltip
                      content={get(each, column.path, column.default || "")}
                    >
                      {link ? (
                        <Link href={link(each)}>
                          <Text>
                            {truncate(
                              get(each, column.path, column.default || ""),
                              110
                            )}
                          </Text>
                        </Link>
                      ) : (
                        <Text>
                          {truncate(
                            get(each, column.path, column.default || ""),
                            110
                          )}
                        </Text>
                      )}
                    </Tooltip>
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
