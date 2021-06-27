import express from "express";

const router = express.Router();

import { getPartNumber } from "./get-part";
import { getUPC } from "./get-upc";

router.get("/part/:partNumber", getPartNumber);
router.get("/upc/:upc", getUPC);

export default { router };
