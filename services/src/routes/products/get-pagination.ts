import { Request, Response } from "express";
import { Products } from "../../db";
import { parsePaginationQuery, REST } from "../../utils";

export async function getPagination(
  request: Request,
  response: Response
): Promise<void> {
  const { page, limit, query, order, orderBy } = parsePaginationQuery(request);

  const $regex = new RegExp(query);
  try {
    const result = await Products.find({
      description: { $regex: $regex.source, $options: "i" },
    })
      .sort({ [orderBy]: order })
      .limit(limit)
      .skip((page - 1) * limit);

    response.status(REST.OK).send(result);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
