import { Request, Response } from "express";
import { Products } from "../../db";
import { REST } from "../../utils";

export async function putProduct(
  request: Request,
  response: Response
): Promise<void> {
  const config = request.body;

  if (!config) {
    response.status(REST.BAD_REQUEST).send("Must provide body");
    return;
  }

  try {
    const { _id } = config;
    let result = null;

    if (_id) {
      result = await Products.findByIdAndUpdate(_id, config);
      response.status(REST.OK).send(result);
    } else {
      result = await Products.create([config]);
      response.status(REST.NEW).send(result);
    }

  } catch (error) {
      console.log(error);
    response.status(REST.BAD_REQUEST).send();
  }
}
