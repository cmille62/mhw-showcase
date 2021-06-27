import { Request, Response } from "express";
import { REST } from "../../utils";
import { Model } from "mongoose";

export async function put(
  request: Request<{ id: string }>,
  response: Response,
  db: Model<any>
): Promise<void> {
  const { id } = request.params;
  const config = request.body;
  try {
    const result = await db.findByIdAndUpdate(id, config);
    response.status(REST.OK).send(result);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
