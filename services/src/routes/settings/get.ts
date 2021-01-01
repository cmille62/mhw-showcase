import { Request, Response } from "express";
import { Settings } from "../../db";

export async function getSettings(_: Request, response: Response) {
  try {
    let document = await Settings.findOne().exec();

    if (!document) {
      const created = await Settings.create([{ live: true }]);
      document = created[0];
    }

    response.status(200).send(document);
  } catch (error) {
    response.status(400).send();
  }
}

export default getSettings;
