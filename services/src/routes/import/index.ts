import express from "express";

const router = express.Router();

import { importCsv } from "./import-csv";

router.put("/csv", importCsv );


export default { router };
