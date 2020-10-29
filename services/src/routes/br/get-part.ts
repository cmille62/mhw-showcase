import { Request, Response } from "express";
import Axios from "axios";
import { BR_ENDPOINT } from "../../utils/constants";
import BR from "./authorize";

export async function getPartNumber(request: Request, response: Response) {
  const partNumber = request.params.partNumber;
  const headers = await BR.getHeader();

  if (!partNumber) {
    response.status(400).send("Must provide Parameter: 'partNumber'");
    return;
  }

  try {
    const result = await Axios.get(`${BR_ENDPOINT}/catalog/part/${partNumber}`, {
      headers,
    });
    response.status(200).send(result.data);
  } catch (error) {
      console.log(error);
    response.status(400).send();
  }
}

export default getPartNumber;
