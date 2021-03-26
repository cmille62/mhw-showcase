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

  title: string;
}

interface StylesTypes {
  icon?: React.ElementType | JSX.Element;
}

function getProps({ loading, failure }: Props): StylesTypes {
  if (loading) {
  }
  if (failure) {
    return { icon: CrossIcon };
  }
  if (!loading && !failure) {
    return { icon: TickIcon };
  }

  return { icon: MinusIcon };
}

export const Checks: FunctionComponent<Props> = (props: Props) => {
  const styles = getProps(props);
  return (
    <Pane>
      {styles.icon && <Icon icon={styles.icon} size={32} />}
      {props.loading && <Spinner size={32} />}
      <Heading>{props.title}</Heading>
    </Pane>
  );
};
