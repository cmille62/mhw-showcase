import React, { FunctionComponent } from "react";
import { CollectionAPI } from "../../../../services";
import { useRootStore } from "../../../../stores";
import { FieldType, FIELD_INPUT } from "../../../../typings";
import { AsyncSelectField, Input, TextareaField } from "../../../common";

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
  const { collectionStore } = useRootStore();
  const props = {
    ...field,
    value,
    onChange: (value: any) => update(value),
  };
  switch (field.type) {
    case FIELD_INPUT.Textarea:
      return <TextareaField {...props} />;
    case FIELD_INPUT.Lookup:
      return (
        <AsyncSelectField
          {...props}
          fetchValues={async () => {
            return collectionStore.fetch(props.key);
          }}
        />
      );
    case FIELD_INPUT.Text:
    default:
      return <Input {...props} />;
  }
};
