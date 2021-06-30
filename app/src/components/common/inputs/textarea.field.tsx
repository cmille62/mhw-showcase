import React, { FunctionComponent, useState, useEffect } from "react";
import { Textarea } from "evergreen-ui";
import { Field } from "../field";
import { StringInputProps } from "./index";

type Props = StringInputProps<string>;

export const TextareaField: FunctionComponent<Props> = (props: Props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const { id, required, placeholder, disabled, onChange } = props;
  return (
    <Field {...props} props={{ ...props.props, flex: 1 }}>
      <Textarea
        id={id && `text-area-${id}`}
        width="100%"
        disabled={disabled || false}
        required={required || false}
        value={value}
        placeholder={placeholder || ""}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          !props.disabled && setValue(event.target.value);
        }}
        onBlur={({
          target: { value },
        }: React.ChangeEvent<HTMLTextAreaElement>) => {
          !props.disabled && onChange && onChange(value);
        }}
      />
    </Field>
  );
};
