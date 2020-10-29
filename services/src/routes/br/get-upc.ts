import { Request, Response } from "express";
import Axios from "axios";
import { BR_ENDPOINT } from "../../utils/constants";
import BR from "./authorize";

export async function getUPC(request: Request, response: Response) {
  const upc = request.params.upc;
  const headers = await BR.getHeader();

  if (!upc) {
    response.status(400).send("Must provide Parameter: 'upc'");
    return;
  }

  try {
    const result = await Axios.get(`${BR_ENDPOINT}/catalog/upc/${upc}`, {
      headers,
    });
    response.status(200).send(result.data);
  } catch (error) {
      console.log(error);
    response.status(400).send();
  }
}

export default getUPC;
