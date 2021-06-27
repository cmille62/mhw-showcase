import { Request, Response } from "express";
import { Settings } from "../../db";
import { REST } from "../../utils";

export async function getSettings(
  _: Request,
  response: Response
): Promise<void> {
  try {
    let document = await Settings.findOne();

    if (!document) {
      const created = await Settings.create([{ live: true }]);
      document = created[0];
    }

    response.status(REST.OK).send(document);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
