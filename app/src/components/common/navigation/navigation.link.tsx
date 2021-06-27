import React, { FunctionComponent } from "react";
import { Button } from "evergreen-ui";
import { useRootStore } from "../../../stores";

interface Props {
  children: React.ReactNode;
  route?: string;
}

/**
 * Breadcrumb-style navigation link for general use across the app.
 */
export const NavigationLink: FunctionComponent<Props> = ({
  route,
  children,
}: Props) => {
  const { routerStore } = useRootStore();
  return route || routerStore ? (
    <Button
      id={route}
      appearance="minimal"
      paddingLeft={2}
      paddingRight={2}
      onClick={() => routerStore?.push(route as string)}
    >
      {children}
    </Button>
  ) : (
    <Button
      id={route}
      appearance="minimal"
      disabled={true}
      paddingLeft={2}
      paddingRight={2}
      backgroundColor="transparent"
      opacity={1}
    >
      {children}
    </Button>
  );
};
