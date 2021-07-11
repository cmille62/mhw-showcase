import React, {
  createRef,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import {
  Pane,
  Popover,
  Card,
  TextInput,
  Text,
  Position,
  Menu,
} from "evergreen-ui";
import { CenterPane } from "../index";
import { Field } from "../field";
import { StringInputProps } from "./index";
import fuzzaldrin from "fuzzaldrin-plus";

// import "./style.scss";

interface Props extends StringInputProps<string> {
  label: string;
  values: string[];
  emptyMessage: string;
}

const minWidth = 215;
const minHeight = 64;
const maxHeight = 240;
const itemSize = 32;

export const SelectField: FunctionComponent<Props> = ({
  value,
  values,
  label,
  emptyMessage,
  onChange,
  ...props
}: Props) => {
  const [internal, setInternal] = useState(value);
  const [targetWidth, setTargetWidth] = useState(0);
  const targetRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (targetRef.current) {
      setTargetWidth(targetRef.current.getBoundingClientRect().width);
    }
  }, [targetRef]);

  useEffect(() => {
    setInternal(value);
  }, [value]);

  const fuzzyFilter = () => {
    if (internal) {
      return fuzzaldrin.filter(values, internal);
    } else {
      return values;
    }
  };

  const filtered = fuzzyFilter();

  return (
    <Field {...props}>
      <Pane display="flex" className="selector" ref={targetRef}>
        {label && <Text color="muted">{label}</Text>}

        <Popover
          position={Position.BOTTOM_RIGHT}
          minWidth={Math.max(targetWidth, minWidth)}
          content={({ close }) => {
            return (
              <Card
                width="100%"
                height={Math.min(
                  Math.max(filtered.length * itemSize, minHeight),
                  maxHeight
                )}
                overflowY="scroll"
              >
                {filtered.length ? (
                  <Menu>
                    {filtered.map((item) => (
                      <React.Fragment key={item}>
                        <Menu.Item
                          key={item}
                          onSelect={() => {
                            onChange && onChange(item);
                            close();
                          }}
                        >
                          {item}
                        </Menu.Item>
                        <Menu.Divider />
                      </React.Fragment>
                    ))}
                  </Menu>
                ) : (
                  <CenterPane>
                    <Text>{emptyMessage}</Text>
                  </CenterPane>
                )}
              </Card>
            );
          }}
        >
          <TextInput
            {...props}
            width="100%"
            value={internal}
            onChange={({
              target: { value },
            }: React.ChangeEvent<HTMLInputElement>) => setInternal(value)}
            onBlur={({
              target: { value },
            }: React.ChangeEvent<HTMLInputElement>) => {
              onChange && onChange(value);
            }}
          />
        </Popover>
      </Pane>
    </Field>
  );
};
