import { Request, Response } from "express";
import { REST } from "../../utils";

export async function importCsv(
  request: Request,
  response: Response
): Promise<void> {
  const config = request.body;

  if (!config) {
    response.status(REST.BAD_REQUEST).send("Must provide body");
    return;
  }
}
