import { parsePaginationQuery } from "./pagination";

describe("Helper Function: Parse Pagination Query Parameters", () => {
  const request = {
    query: {
      page: 1,
      size: 10,
      query: "query",
      order: "asc",
      orderBy: "path",
    },
  } as any;

  it("Should handle query paramter: 'query' properly.", () => {
    const { query } = parsePaginationQuery(request);
    expect(query).toEqual(request.query.query);
  });

  it("Should handle parsing query paramter: 'page' properly.", () => {
    const { page } = parsePaginationQuery(request);
    expect(page).toEqual(request.query.page);
  });

  it("Should handle parsing query paramter: 'size' properly.", () => {
    const { limit } = parsePaginationQuery(request);
    expect(limit).toEqual(request.query.size);
  });

  it("Should handle parsing query paramter: 'order' of asc properly.", () => {
    const { order } = parsePaginationQuery(request);
    expect(order).toEqual(1);
  });

  it("Should handle parsing query paramter: 'order' of dsc properly.", () => {
    request.query.order = "desc";
    const { order } = parsePaginationQuery(request);
    expect(order).toEqual(-1);
  });

  it("Should handle parsing query paramter: 'order' with invalid value properly.", () => {
    request.query.order = "";
    const { order } = parsePaginationQuery(request);
    expect(order).toEqual(0);
  });

  it("Should handle parsing query paramter: 'orderBy' properly.", () => {
    const { orderBy } = parsePaginationQuery(request);
    expect(orderBy).toEqual(request.query.orderBy);
  });
});
