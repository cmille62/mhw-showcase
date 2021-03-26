import React, { FunctionComponent } from "react";
import {
  CrossIcon,
  Heading,
  Icon,
  MinusIcon,
  Pane,
  Spinner,
  TickIcon,
} from "evergreen-ui";

interface Props {
  loading?: boolean;
  failure?: boolean;

  children?: React.ReactNode;
  title: string;
}

interface StylesTypes {
  icon?: React.ElementType | JSX.Element;
  background?: string;
}

function getProps({ loading, failure }: Props): StylesTypes {
  if (loading) {
    return { background: "tint1" };
  }
  if (failure) {
    return { icon: CrossIcon, background: "redTint" };
  }
  if (!loading && !failure) {
    return { icon: TickIcon, background: "greenTint" };
  }

  return { icon: MinusIcon, background: "tint2" };
}

export const Checks: FunctionComponent<Props> = (props: Props) => {
  const styles = getProps(props);
  return (
    <Pane
      display="flex"
      alignItems="center"
      padding={16}
      margin={8}
      background={styles.background}
    >
      <Pane marginRight={8}>
        {styles.icon && <Icon color="muted" icon={styles.icon} size={24} />}
        {props.loading && <Spinner size={32} />}
      </Pane>
      <Pane width="100%">
        <Heading>{props.title}</Heading>
      </Pane>
      {props.children && props.children}
    </Pane>
  );
};
