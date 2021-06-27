import React, { FunctionComponent } from "react";
import { Heading, Pane } from "evergreen-ui";

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

/**
 * Wrapper Component for rendering breadcrumb style navigation links.
 */
export const Navigation: FunctionComponent<Props> = ({ children }: Props) => {
  const renderDivider = (child: React.ReactNode) => {
    return (
      <Pane>
        {" / "}
        {child}
      </Pane>
    );
  };

  return (
    <Heading size={200} marginTop={10}>
      <Pane display="flex" flexDirection="row" alignItems="center">
        {React.Children.map(children, (child, index) => {
          if (index <= 0) {
            return child;
          } else {
            return renderDivider(child);
          }
        })}
      </Pane>
    </Heading>
  );
};
