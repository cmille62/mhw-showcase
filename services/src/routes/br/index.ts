import express, { Request, Response } from "express";

const router = express.Router();

import { getBySKU } from "./get-sku";
import { getByUPC } from "./get-upc";

router.get("/part/:sku", getBySKU);
router.get("/upc/:upc", getByUPC);

router.use("/*", (_: Request, res: Response) => {
  res.send("Invalid API Request");
});

export default { router };
