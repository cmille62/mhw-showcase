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
  Text,
  Position,
  Menu,
  TagInput,
  TickIcon,
  BlankIcon,
} from "evergreen-ui";
import { CenterPane } from "../index";
import { Field } from "../field";
import { StringInputProps } from "./index";

interface Props extends StringInputProps<string[]> {
  label?: string;
  values: string[];
  emptyMessage?: string;
}

const minWidth = 215;
const minHeight = 64;
const maxHeight = 240;
const itemSize = 32;

export const MultiSelectField: FunctionComponent<Props> = ({
  value,
  label,
  emptyMessage = "No available results",
  onChange,
  values,
  ...props
}: Props) => {
  const [internal, setInternal] = useState<string[]>(value || []);
  const [targetWidth, setTargetWidth] = useState(0);
  const targetRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (targetRef.current) {
      setTargetWidth(targetRef.current.getBoundingClientRect().width);
    }
  }, [targetRef]);

  useEffect(() => {
    setInternal(value || []);
  }, [value]);

  return (
    <Field {...props}>
      <Pane display="flex" className="selector" ref={targetRef}>
        {label && <Text color="muted">{label}</Text>}

        <Popover
          position={Position.BOTTOM_RIGHT}
          minWidth={Math.max(targetWidth, minWidth)}
          content={() => {
            return (
              <Card
                width="100%"
                height={Math.min(
                  Math.max(values.length * itemSize, minHeight),
                  maxHeight
                )}
                overflowY="scroll"
              >
                {values.length ? (
                  <Menu>
                    {values.map((item) => (
                      <React.Fragment key={item}>
                        <Menu.Item
                          icon={internal.includes(item) ? TickIcon : BlankIcon}
                          onSelect={() => {
                            if (internal.includes(item)) {
                              const result = internal.filter(
                                (value) => value !== item
                              );

                              setInternal(result);
                              onChange && onChange(result);
                            } else {
                              const result = [...internal, item];

                              setInternal(result);
                              onChange && onChange(result);
                            }
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
          <TagInput
            {...props}
            width="100%"
            values={internal}
            onChange={(values) => setInternal(values)}
          />
        </Popover>
      </Pane>
    </Field>
  );
};
