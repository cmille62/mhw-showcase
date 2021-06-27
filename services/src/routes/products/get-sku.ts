import { Request, Response } from "express";
import { REST } from "../../utils";
import { Products } from "../../db";

export async function getProductBySKU(
  request: Request<{ sku: string }>,
  response: Response
): Promise<void> {
  const { sku } = request.params;

  try {
    const document = await Products.findOne({ sku });

    if (!document) {
      response.status(REST.NOT_FOUND).send(document);
      return;
    }

    response.status(REST.OK).send(document);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
