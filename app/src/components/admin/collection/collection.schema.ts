import { SchemaType } from "../../../typings";

const description = {
  title: "Description",
  path: "description",
  type: "textarea",
};

const conversion = {
  title: "Conversion",
  path: "conversion",
  type: "array",
};

export const Schema: { [key: string]: SchemaType[] } = {
  action: [
    {
      title: "Action",
      path: "action",
    },
    description,
    conversion,
  ],
  caliber: [
    {
      title: "Caliber",
      path: "caliber",
    },
    description,
    conversion,
    {
      title: "Type",
      path: "type",
    },
    {
      title: "Metric Diameter",
      path: "diameter.metric",
    },
    {
      title: "Standard Diameter",
      path: "diameter.standard",
    },
  ],
  category: [
    {
      title: "Category",
      path: "category",
    },
    description,
    conversion,
  ],
  docs: [
    {
      title: "Category",
      path: "category",
      type: "distinct",
    },
    {
      title: "Title",
      path: "title",
    },
    description,
    {
      title: "Examples",
      path: "examples",
      type: "list",
    },
  ],
};
