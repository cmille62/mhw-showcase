import React, { FunctionComponent, useEffect, useState } from "react";
import { Pane, IconButton, TextInput, CrossIcon, PlusIcon } from "evergreen-ui";
import { Field } from "../field";
import { InputProps } from "./index";
import { cloneDeep } from "lodash";

type Props = InputProps<string[]>;

export const ListField: FunctionComponent<Props> = ({
  value,
  ...props
}: Props) => {
  const onChange = (update: string, index: number) => {
    const result: string[] = cloneDeep(value) || [];
    result[index] = update;
    props.onChange && props.onChange(result);
  };
  const onDelete = (i: number) => {
    const result = (value || []).filter((_, index) => index !== i);
    props.onChange && props.onChange(result);
  };
  const onAddition = (update: string) => {
    const result: string[] = cloneDeep(value || "") || [];
    result.push(update);
    props.onChange && props.onChange(result);
  };

  return (
    <Field {...props} props={{ ...props.props, flex: 1 }}>
      {(value || [])?.map((each, index) => (
        <ListItem
          key={`list-${index}`}
          {...{ onChange, onDelete, value: each, index }}
        />
      ))}
      <ListItem {...{ onAddition }} />
    </Field>
  );
};

interface ListProps {
  value?: string;
  index?: number;
  onChange?: (value: string, index: number) => void;
  onDelete?: (index: number) => void;
  onAddition?: (value: string) => void;
}

const p = {
  marginLeft: 8,
};

const ListItem: FunctionComponent<ListProps> = ({
  value = "",
  index = -1,
  onChange,
  onDelete,
  onAddition,
}: ListProps) => {
  const [internal, setInternal] = useState(value);

  useEffect(() => {
    setInternal(value);
  }, [value]);

  return (
    <Pane display="flex" marginTop={8}>
      <TextInput
        width="100%"
        value={internal}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLInputElement>) => setInternal(value)}
        onBlur={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(value, index)
        }
        onKeyDown={(event?: React.KeyboardEvent<HTMLInputElement>) => {
          if (event) {
            switch (event.code) {
              case "Tab": // Tab
              case "Enter": // Enter
                if (onAddition) {
                  onAddition(internal);
                  setInternal("");
                }
                break;
              default:
                break;
            }
          }
        }}
      />
      {onDelete && (
        <IconButton {...p} icon={CrossIcon} onClick={() => onDelete(index)} />
      )}
      {onAddition && (
        <IconButton
          {...p}
          icon={PlusIcon}
          onClick={() => onAddition(internal)}
        />
      )}
    </Pane>
  );
};
