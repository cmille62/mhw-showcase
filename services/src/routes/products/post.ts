import { Request, Response } from "express";
import { Products } from "../../db";
import { REST } from "../../utils";

export async function postProduct(
  request: Request,
  response: Response
): Promise<void> {
  const config = request.body;

  if (!config) {
    response.status(REST.BAD_REQUEST).send("Must provide body");
    return;
  }

  try {
    const result = await Products.create([config]);

    response.status(REST.NEW).send(result);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
