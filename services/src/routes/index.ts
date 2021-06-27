import express, { Request, Response } from "express";

const router = express.Router();

import br from "./br";
import collections from "./collections";
import products from "./products";
import settings from "./settings";

router.use("/br", br.router);
router.use("/collections/:db", collections.router);
router.use("/products", products.router);
router.use("/settings", settings.router);

router.get("/*", (_: Request, res: Response) => {
  res.send("Not a valid api call");
});

router.use("/*", (_: Request, res: Response) => {
  res.send("Invalid API Request");
});

export default { router };
