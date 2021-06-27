import { Request, Response } from "express";
import { REST } from "../../utils";
import { Model } from "mongoose";

export async function post(
  request: Request,
  response: Response,
  db: Model<any>
): Promise<void> {
  const config = request.body;
  try {
    const result = await db.create([config]);
    response.status(REST.OK).send(result);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
