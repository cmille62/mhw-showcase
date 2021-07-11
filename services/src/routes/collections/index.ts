import express, { Request } from "express";
import * as core from "express-serve-static-core";
import {
  ActionModel,
  CaliberModel,
  CategoryModel,
  DocsModel,
  ManufacturerModel,
  SafetyModel,
} from "../../db";

const router = express.Router();

import { get } from "./get";
import { getAll } from "./get-all";
import { getDistinct } from "./get-distinct";
import { post } from "./post";
import { put } from "./put";
import { reset } from "./reset";

type T<P extends core.Params = core.ParamsDictionary> = Request<
  P & { db: string }
>;

function getDb(db: string) {
  switch (db) {
    case "action":
      return ActionModel;
    case "caliber":
      return CaliberModel;
    case "category":
      return CategoryModel;
    case "manufacturer":
      return ManufacturerModel;
    case "safety":
      return SafetyModel;
    case "docs":
      return DocsModel;
  }
}
router.get("/:db/distinct/:path", (req: T<{path: string}>, res) => getDistinct(req, res, getDb(req.params.db)));
router.get("/:db/all", (req: T, res) => getAll(req, res, getDb(req.params.db)));
router.get("/:db/:id", (req: T<{ id: string }>, res) =>
  get(req, res, getDb(req.params.db))
);

router.post("/:db/", (req: T, res) => post(req, res, getDb(req.params.db)));

router.put("/:db/reset", (req: T, res) =>
  reset(req, res, getDb(req.params.db))
);

router.put("/:db/", (req: T<{ id: string }>, res) =>
  put(req, res, getDb(req.params.db))
);

export default { router };
