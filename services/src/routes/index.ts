import express from "express";

const router = express.Router();

import products from "./products";

router.use("/products", products.router);

router.get("/*", (req: any, res: any) => {
  res.send("Not a valid api call");
});

router.use("/*", (req: any, res: any) => {
  res.send("Invalid API Request");
});

export default { router };
