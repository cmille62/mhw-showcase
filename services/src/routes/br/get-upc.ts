import { Request, Response } from "express";
import Axios, { AxiosResponse } from "axios";
import { BR_ENDPOINT, REST } from "../../utils";
import { BrProductType } from "../../types";
import { BR } from "./authorize";

export async function getByUPC(
  request: Request<{ upc: string }>,
  response: Response
): Promise<void> {
  const { upc } = request.params;
  const headers = await BR.getHeader();

  try {
    const result: AxiosResponse<BrProductType> = await Axios.get(
      `${BR_ENDPOINT}/catalog/upc/${upc}`,
      {
        headers,
      }
    );

    const toParse = result.data;
      if(toParse) {

      }


    response.status(REST.OK).send(result.data);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send();
  }
}
