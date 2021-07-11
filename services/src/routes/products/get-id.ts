import { Request, Response } from "express";
import { REST } from "../../utils";
import { Products } from "../../db";

export async function getProductByID(
  request: Request<{ id: string }>,
  response: Response,
): Promise<void> {
  const { id } = request.params;
  try {
    const document = await Products.findOne({ _id: id });
    response.status(REST.OK).send(document);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
