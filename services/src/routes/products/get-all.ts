import { Request, Response } from "express";
import { Products } from "../../db";

export async function getAll(request: Request, response: Response) {
  try {
    const document = await Products.find();
    response.status(200).send(document);
  } catch (error) {
    response.status(400).send();
  }
}

export default getAll;
