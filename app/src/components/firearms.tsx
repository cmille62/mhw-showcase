import React, { FunctionComponent } from "react";
import { Finder, FinderSchema } from "./finder";

const schema: FinderSchema = {
  type: "Firearms",
  search: [],
  api: "/firearms",
};

export const Firearms: FunctionComponent = () => {
  return <Finder {...{ schema }} />;
};
