import { Request, Response } from "express";
import { Products } from "../../db";

export async function getProduct(request: Request, response: Response) {
  const upc = request.params.upc;

  if (!upc) {
    response.status(400).send("Must provide Parameter: 'upc'");
    return;
  }

  try {
    const document = await Products.findOne({ upc }).exec();
    response.status(200).send(document);
  } catch (error) {
    response.status(400).send();
  }
}

export default getProduct;
