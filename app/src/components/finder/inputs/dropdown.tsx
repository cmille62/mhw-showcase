import React, { FunctionComponent } from "react";
import { Combobox } from "evergreen-ui";
import { InputOption, InputProps } from "../type";

export interface DropdownProps extends InputProps<string> {
  default: InputOption<string>;
  items: InputOption<string>[];
}

export const Dropdown: FunctionComponent<DropdownProps> = (props: DropdownProps) => {
  return (
    <Combobox
      {...props}
      openOnFocus
      itemToString={(item) => (item ? item.label : "")}
    />
  );
};
