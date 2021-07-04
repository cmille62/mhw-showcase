import express from "express";

const router = express.Router();

import { getProductBySKU } from "./get-sku";
import { getProductByUPC } from "./get-upc";
import { getAll } from "./get-all";

import { newProduct } from "./new";
import { putProduct } from "./put";

router.get("/sku/:sku", getProductBySKU);
router.get("/upc/:upc", getProductByUPC);

router.get("/all", getAll);

router.post("/new/:upc", newProduct);
router.put("/", putProduct);

export default { router };
