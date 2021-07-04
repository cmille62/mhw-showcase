import express, { Request, Response } from "express";

const router = express.Router();

import { getBySKU } from "./get-sku";
import { getByUPC } from "./get-upc";

import { getImageBySKU } from "./get-image";

router.get("/part/:sku", getBySKU);
router.get("/upc/:upc", getByUPC);

router.get("/image/:sku", getImageBySKU);

router.use("/*", (_: Request, res: Response) => {
  res.send("Invalid API Request");
});

export default { router };
