import { Request, Response } from "express";
import { REST } from "../../utils";
import { Model } from "mongoose";

export async function getAll(
  _: Request,
  response: Response,
  db: Model<any>
): Promise<void> {
  try {
    const document = await db.find();
    response.status(REST.OK).send(document);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
