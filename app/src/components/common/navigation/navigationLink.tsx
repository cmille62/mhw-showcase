import * as React from 'react';
import { Button } from 'evergreen-ui';
import { RouterStore } from '../../../stores';

interface Props {
  routerStore?: RouterStore;
  route?: string;
}

/**
 * Breadcrumb-style navigation link for general use across the app.
 */
export class NavigationLink extends React.Component<Props, {}> {
  render() {
    return this.props.route || this.props.routerStore ? (
      <Button
        id={this.props.route}
        appearance="minimal"
        paddingLeft={2}
        paddingRight={2}
        onClick={() => this.props.routerStore?.push(this.props.route as string)}
      >
        {this.props.children}
      </Button>
    ) : (
      <Button
        id={this.props.route}
        appearance="minimal"
        disabled={true}
        paddingLeft={2}
        paddingRight={2}
        className="navigation-text-only"
      >
        {this.props.children}
      </Button>
    );
  }
}
