import React, { FunctionComponent } from "react";
import { Checkbox, Pane, Text } from "evergreen-ui";
import { InputProps } from "./index";

export const CheckboxInput: FunctionComponent<InputProps<boolean>> = (
  props: InputProps<boolean>
) => {
  const { value, title, onChange, disabled } = props;
  return (
    <Pane display="flex" alignItems="center" >
      <Checkbox
        checked={value}
        onChange={({ target: { checked } }) =>
          !disabled && onChange && onChange(checked)
        }
        disabled={disabled}
      />
      {title && <Text paddingLeft={5} size={300}>{title}</Text>}
    </Pane>
  );
};
