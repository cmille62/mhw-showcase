import { Request } from "express";

interface PaginationOutput {
  page: number;
  limit: number;
  query: string;
  order: number;
  orderBy: string;
}

export function parsePaginationQuery(request: Request): PaginationOutput {
  const page: number =
    (request.query.page && parseInt(`${request.query.page}`, 10)) || 1;
  const limit: number =
    (request.query.size && parseInt(`${request.query.size}`, 10)) || 25;
  const query: string = (request.query.query as string) || "";

  const orderVal: string = (request.query.order as string) || "";
  const orderBy: string = (request.query.orderBy as string) || "";

  let order = 0;

  switch (orderVal) {
    case "asc":
      order = 1;
      break;
    case "desc":
      order = -1;
      break;
    default:
      order = 0;
  }

  return { query, limit, page, order, orderBy };
}
