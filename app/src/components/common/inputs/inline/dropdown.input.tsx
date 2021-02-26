import React, { FunctionComponent } from "react";
import { Select, Pane, Text } from "evergreen-ui";
import { EnumInputProps } from "../index";

export const DropdownInput: FunctionComponent<
  EnumInputProps<string | number>
> = (props: EnumInputProps<string | number>) => {
  const { value, title, onChange, disabled, options } = props;
  return (
    <Pane display="flex" alignItems="center" marginY={5}>
      {title && (
        <Text paddingRight={8} size={300}>
          {title}
        </Text>
      )}
      <Select
        value={value}
        onChange={({ target: { value } }) =>
          !disabled && onChange && onChange(value)
        }
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value}>{option.title}</option>
        ))}
      </Select>
    </Pane>
  );
};
