import { Request, Response } from "express";
import Axios from "axios";
import { BR_ENDPOINT, REST } from "../../utils";
import { BR } from "./authorize";

export async function getImageBySKU(
  request: Request<{ sku: string }>,
  response: Response
): Promise<void> {
  const { sku } = request.params;
  const headers = await BR.getHeader();

  try {
    const result = await Axios.get(`${BR_ENDPOINT}/images/${sku}`, {
      headers,
    });
    response.status(REST.OK).send(result.data);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
