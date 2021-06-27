import { Request, Response } from "express";
import { Products } from "../../db";
import { REST } from "../../utils";

export async function getAll(_: Request, response: Response): Promise<void> {
  try {
    const document = await Products.find();
    response.status(REST.OK).send(document);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
