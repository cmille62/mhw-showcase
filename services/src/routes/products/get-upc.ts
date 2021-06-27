import { Request, Response } from "express";
import { REST } from "../../utils";
import { Products } from "../../db";

export async function getProductByUPC(
  request: Request<{ upc: string }>,
  response: Response
): Promise<void> {
  const { upc } = request.params;

  try {
    const document = await Products.findOne({ upc });

    if (!document) {
      response.status(REST.NOT_FOUND).send(document);
      return;
    }

    response.status(REST.OK).send(document);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
