import React, { FunctionComponent } from "react";
import { Section } from "../../common";
import { Input } from "../../common";

const fields = [
  {
    title: "SKU",
    key: "sku",
  },
  {
    title: "UPC",
    key: "upc",
  },
  {
    title: "MFG Part Number",
    key: "mfg",
  },
];

export const ProductLookup: FunctionComponent = () => {
  return (
    <Section title="Product Lookup" props={{ display: "flex" }}>
      {fields.map((field) => (
        <Input {...field} props={{ marginX: 4 }} />
      ))}
    </Section>
  );
};
