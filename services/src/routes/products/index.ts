import express from "express";

const router = express.Router();

import { getProductBySKU } from "./get-sku";
import { getProductByUPC } from "./get-upc";

import { getAll } from "./get-all";
import { newProduct } from "./new";

router.get("/sku/:sku", getProductBySKU);
router.get("/upc/:upc", getProductByUPC);

router.get("/all", getAll);

router.put("/new/:upc", newProduct);

export default { router };
