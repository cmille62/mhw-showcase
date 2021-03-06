import { Request, Response } from "express";
import { REST } from "../../utils";
import { Model } from "mongoose";

export async function get(
  request: Request<{ id: string }>,
  response: Response,
  db: Model<any>
): Promise<void> {
  const { id } = request.params;
  try {
    const document = await db.findOne({ _id: id });
    response.status(REST.OK).send(document);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
