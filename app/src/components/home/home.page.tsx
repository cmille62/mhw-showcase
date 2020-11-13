import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouterStore } from "../../stores";
import { ContentPane, Navigation, NavigationLink } from "../common";

interface Props {
  routerStore: RouterStore;
}

@inject("routerStore")
@observer
export class HomePage extends React.Component<Props, {}> {
  render() {
    return (
      <ContentPane>
        <Navigation>
          <NavigationLink>Home</NavigationLink>
        </Navigation>
      </ContentPane>
    );
  }
}

export default HomePage;
