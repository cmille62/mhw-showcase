import * as React from 'react';
import { Heading, Pane } from 'evergreen-ui';

import "./style.scss";

/**
 * Wrapper Component for rendering breadcrumb style navigation links.
 */
export class Navigation extends React.Component<{}, {}> {
  renderDivider(child: React.ReactNode) {
    return (
      <Pane>
        {' / '}
        {child}
      </Pane>
    );
  }

  render() {
    return (
      <Heading size={200} className="application-navigation">
        <Pane display="flex" flexDirection="row" alignItems="center">
          {React.Children.map(this.props.children, (child, index) => {
            if (index <= 0) {
              return child;
            } else {
              return this.renderDivider(child);
            }
          })}
        </Pane>
      </Heading>
    );
  }
}
