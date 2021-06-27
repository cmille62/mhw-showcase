import express from "express";

const router = express.Router();

import { getProductByUPC } from "./get";
import { getAll } from "./get-all";
import { newProduct } from "./new";

router.get("/:upc", getProductByUPC);
router.get("/all", getAll);
router.put("/new/:upc", newProduct);

export default { router };
