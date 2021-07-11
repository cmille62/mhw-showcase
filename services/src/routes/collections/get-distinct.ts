import { Request, Response } from "express";
import { REST } from "../../utils";
import { Model } from "mongoose";

export async function getDistinct(
  request: Request<{ path: string }>,
  response: Response,
  db: Model<any>
): Promise<void> {
  const { path } = request.params;
  try {
    db.distinct(path, function (err, distinct) {
      response.status(REST.OK).send(distinct);
    });
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
