import { Request, Response } from "express";
import { REST } from "../../utils";
import { Model } from "mongoose";
import { DEFAULTS } from "../../db/defaults";

export async function reset(
  request: Request<{ db: string }>,
  response: Response,
  db: Model<any>
): Promise<void> {
  try {
    await db.remove({});
    await db.create(DEFAULTS[request.params.db]);
    const documents = await db.find();

    response.status(REST.OK).send(documents);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
