import React, { FunctionComponent } from "react";
import { Finder, FinderSchema, Dropdown } from "./finder";

const schema: FinderSchema = {
  type: "Firearms",
  search: [
    {
      input: "Dropdown",
      props: {
        default: { label: "All Manufacturers", value: null, items: [] },
      },
      path: "manufacturer",
    },
    {
      input: "Dropdown",
      props: { default: { label: "All Models", value: null, items: [] } },
      path: "model",
    },
  ],
  api: "/firearms",
};

export const Firearms: FunctionComponent = () => {
  return <Finder {...{ schema }} />;
};
