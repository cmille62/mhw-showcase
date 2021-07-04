import { Location } from "history";
import QueryString from "qs";
import { DEFAULT_PAGE, DEFAULT_SIZE, SORT } from "./constants";

export interface PaginationQueryType {
  size: string;
  page: string;
  query: string;
  order: string;
  orderBy: string;
}

export function parsePaginationQuery(location: Location): PaginationQueryType {
  const url = QueryString.parse(location.search);
  const page = `${url["?page"] || url.page || DEFAULT_PAGE}`;
  const size = `${url.size || url["?size"] || DEFAULT_SIZE}`;
  const query = `${url.query || url["?query"] || ""}`;
  const order = `${url.order || url["?order"] || SORT.ascending}`;
  const orderBy = `${url.orderBy || url["?orderBy"] || ""}`;

  return { page, size, query, order, orderBy };
}

export interface PaginationLooseQueryType {
  size: string | number;
  page: string | number;
  query?: string;
  order?: string;
  orderBy?: string;
}

export function generatePaginationQuery({
  size,
  page,
  query = "",
  order = SORT.ascending,
  orderBy = "",
}: PaginationLooseQueryType) {
  return new URLSearchParams({
    size: `${size}`,
    page: `${page}`,
    query,
    order,
    orderBy,
  }).toString();
}
