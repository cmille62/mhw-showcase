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
  banner?: string;
}

function getProps({ loading, failure }: Props): StylesTypes {
  if (loading) {
    return { banner: "blue500", background: "blueTint" };
  }
  if (failure) {
    return { banner: "red500", icon: CrossIcon, background: "redTint" };
  }
  if (!loading && !failure) {
    return { icon: TickIcon, banner: "green500", background: "greenTint" };
  }

  return { icon: MinusIcon, banner: "orange500", background: "orangeTint" };
}

export const Checks: FunctionComponent<Props> = (props: Props) => {
  const styles = getProps(props);
  return (
    <Pane display="flex" margin={8}>
      <Pane
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
        width={8}
        background={styles.banner}
        flexShrink={0}
      />
      <Pane
        width="100%"
        display="flex"
        alignItems="center"
        padding={16}
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
    </Pane>
  );
};
