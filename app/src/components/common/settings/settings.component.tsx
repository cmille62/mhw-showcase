import React, { FunctionComponent } from "react";
import { StatusIndicator, Text, Switch, Label } from "evergreen-ui";
import { ColumnPane, ControlPane } from "../index";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
  title: string;
  description: string;
}

export const Setting: FunctionComponent<Props> = ({
  value,
  onChange,
  title,
  description,
}: Props) => {
  return (
    <ControlPane padding={16} background="tint2" border="muted">
      <ColumnPane>
        <StatusIndicator color={!value ? "success" : "warning"}>
          <Label htmlFor="collaboration" display="block">
            {title}
          </Label>
        </StatusIndicator>
        {description && <Text marginLeft={16}>{description}</Text>}
      </ColumnPane>
      <Switch
        id="collaboration"
        checked={value}
        onChange={({
          target: { checked },
        }: React.ChangeEvent<HTMLInputElement>) => onChange(checked)}
      />
    </ControlPane>
  );
};
