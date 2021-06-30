import React, { FunctionComponent } from "react";
import { FieldType, FIELD_INPUT } from "../../../../typings";
import { Input, TextareaField } from "../../../common";

interface Props {
  value: any;
  field: FieldType;

  update: (value: any) => void;
}

export const InputController: FunctionComponent<Props> = ({
  value,
  field,
  update,
}: Props) => {
  const props = {
    title: field.title,
    value,
    onChange: (value: any) => update(value),
  };
  switch (field.type) {
    case FIELD_INPUT.Textarea:
      return <TextareaField {...props} />;
    case FIELD_INPUT.Text:
    default:
      return <Input {...props} />;
  }
};
