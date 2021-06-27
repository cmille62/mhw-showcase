import { Request, Response } from "express";
import { REST } from "../../utils";
import { Model } from "mongoose";
import { DEFAULTS } from "../../db/defaults";

export async function getAll(
  request: Request<{ db: string }>,
  response: Response,
  db: Model<any>
): Promise<void> {
  try {
    console.log(request.params.db);
    let documents = await db.find();

    if (!documents.length) {
      await db.create(DEFAULTS[request.params.db]);
      documents = await db.find();
    }

    response.status(REST.OK).send(documents);
  } catch (error) {
    console.log(error);
    response.status(REST.BAD_REQUEST).send();
  }
}
