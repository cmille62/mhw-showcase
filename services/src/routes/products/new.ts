import { Request, Response } from "express";
import { Products } from "../../db";

export async function newProduct(request: Request, response: Response) {
  const config = request.body;

  if (!config) {
    response.status(400).send("Must provide body");
    return;
  }

  try {
    const result = await Products.create([config]);

    response.status(200).send(result);
  } catch (error) {
    response.status(400).send();
  }
}

export default newProduct;
