import express from "express";

const router = express.Router();

import { getProductBySKU } from "./get-sku";
import { getProductByUPC } from "./get-upc";

import { getAll } from "./get-all";
import { getPagination } from "./get-pagination";
import { getTotalDocumentCount } from "./get-count";

import { postProduct } from "./post";
import { putProduct } from "./put";

router.get("/sku/:sku", getProductBySKU);
router.get("/upc/:upc", getProductByUPC);

router.get("/all", getAll);
router.get("/page", getPagination);
router.get("/count/:query?", getTotalDocumentCount);

router.post("/", postProduct);
router.put("/", putProduct);

export default { router };
