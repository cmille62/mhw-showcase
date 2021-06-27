import { Request, Response } from "express";
import { Settings } from "../../db";
import { Static, REST } from "../../utils";

export async function putSettings(
  request: Request<{ id: string }>,
  response: Response
): Promise<void> {
  const { id } = request.params;
  const config = request.body;

  try {
    await Settings.findByIdAndUpdate({ _id: id }, config);

    response.status(REST.OK).send(Static.SETTINGS_UPDATED_MESSAGE);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
