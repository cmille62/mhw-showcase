import React, { FunctionComponent } from "react";
import { Pane } from "evergreen-ui";
import { Input, Section } from "../../../common";

interface Props {
  setUPC: (upc: string) => void;
  setSKU: (sku: string) => void;
}

export const ProductLookup: FunctionComponent<Props> = ({
  setSKU,
  setUPC,
}: Props) => {
  const fields = [
    {
      title: "SKU",
      key: "sku",
      onChange: setSKU,
    },
    {
      title: "UPC",
      key: "upc",
      onChange: setUPC,
    },
    // {
    //   title: "MFG Part Number",
    //   key: "mfg",
    // },
  ];

  return (
    <Section title="Product Lookup" style={{ flexDirection: "column" }}>
      <Pane display="flex">
        {fields.map((field) => (
          <Input {...field} props={{ marginX: 4 }} />
        ))}
      </Pane>

      {/* <ControlPane style={{ marginTop: 16, marginX: 4 }}>
        <Button appearance="primary">Search</Button>
      </ControlPane> */}
    </Section>
  );
};
