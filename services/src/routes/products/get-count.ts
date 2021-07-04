import { Products } from "../../db/";
import { Request, Response } from "express";
import { REST } from "../../utils";

export async function getTotalDocumentCount(
  request: Request<{ query: string }>,
  response: Response
) {
  const { query } = request.params;

  try {
    let result = [];
    if (query) {
      result = await Products.aggregate([
        {
          $match: {
            description: query || "",
          },
        },
        {
          $count: "qty",
        },
      ]);
    } else {
        result = await Products.aggregate([
            {
              $count: "qty",
            },
          ]);
    }

    console.log(result);
    response.status(REST.OK).send(result[0]);
  } catch (error) {
    response.status(REST.BAD_REQUEST).send("Get Submissions failed");
  }
}
