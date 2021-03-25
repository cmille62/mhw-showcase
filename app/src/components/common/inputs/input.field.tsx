import React, { FunctionComponent, useState, useEffect } from "react";
import { TextInput } from "evergreen-ui";
import { Field } from "../field";
import { StringInputProps } from "./index";

type Props = StringInputProps<string>;

export const Input: FunctionComponent<Props> = (props: Props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const { id, type, required, placeholder, disabled, onChange } = props;
  return (
    <Field {...props} props={{ ...props.props, flex: 1 }}>
      <TextInput
        id={id && `text-area-${id}`}
        type={type || "input"}
        width="100%"
        disabled={disabled || false}
        required={required || false}
        value={value}
        placeholder={placeholder || ""}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          !props.disabled && setValue(event.target.value);
        }}
        onBlur={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) => {
          !props.disabled && onChange && onChange(value);
        }}
      />
    </Field>
  );
};

export default Input;
