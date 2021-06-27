import React, { FunctionComponent } from "react";
import { Combobox, IconButton, TextInput, SearchIcon } from "evergreen-ui";
import { Section } from "../../../common";
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
      <TextInput
        width="100%"
        marginX={4}
        value={value}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) => setValue(value)}
      />
      <IconButton icon={SearchIcon} />
    </Section>
  );
};
