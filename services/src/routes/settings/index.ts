import express from "express";

const router = express.Router();

import { getSettings } from "./get";
import { putSettings } from "./put";

router.get("/", getSettings);
router.put("/:id", putSettings);


export default { router };
