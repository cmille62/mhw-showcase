import React, { FunctionComponent } from "react";
import { Combobox, IconButton, SearchIcon } from "evergreen-ui";
import { Input, Section } from "../../../common";
import { ProductLookupOptions, ProductLookupType } from "../../../../typings";

interface Props {
  value: string;
  type: ProductLookupOptions;

  setValue: (value: string) => void;
  setType: (value: ProductLookupOptions) => void;
}

export const ProductLookup: FunctionComponent<Props> = ({
  value,
  setValue,
  type,
  setType,
}: Props) => {
  return (
    <Section title="Product">
      <Combobox
        initialSelectedItem={ProductLookupOptions.find(
          (item) => item.value === type
        )}
        items={ProductLookupOptions}
        itemToString={(item) => item?.title || ""}
        onChange={(item: ProductLookupType) => setType(item.value)}
      />
      <Input
        props={{ marginX: 4, width: "100%", minWidth: "300px" }}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <IconButton icon={SearchIcon} />
    </Section>
  );
};
