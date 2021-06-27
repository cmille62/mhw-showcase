import express, { Request } from "express";
import * as core from "express-serve-static-core";
import { ActionModel, CaliberModel } from "../../db";

const router = express.Router();

import { get } from "./get";
import { getAll } from "./get-all";
import { post } from "./post";
import { put } from "./put";

type T<P extends core.Params = core.ParamsDictionary> = Request<
  P & { db: string }
>;

function getDb(db: string) {
  switch (db) {
    case "caliber":
      return CaliberModel;
    case "action":
      return ActionModel;
  }
}

router.get("/:id", (req: T<{ id: string }>, res) =>
  get(req, res, getDb(req.params.db))
);
router.get("/all", (req: T, res) => getAll(req, res, getDb(req.params.db)));

router.post("/", (req: T, res) => post(req, res, getDb(req.params.db)));
router.put("/", (req: T<{ id: string }>, res) => put(req, res, getDb(req.params.db)));

export default { router };
