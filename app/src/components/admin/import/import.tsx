import React, { Component } from "react";
import { ImportStore, RouterStore } from "../../../stores";
import { SideNavigation } from "../navigation";
import { ContentPane, Navigation, NavigationLink } from "../../common";
import { Routes } from "../../../utils";
import ImportForm from "./import.form";
import { inject, observer } from "mobx-react";

interface Props {
  routerStore: RouterStore;
  importStore: ImportStore;
}

@inject("routerStore", "importStore")
@observer
export class ImportPage extends Component<Props, {}> {
  render() {
    return (
      <ContentPane>
        <Navigation>
          <NavigationLink {...this.props} route={Routes.Home.path}>
            Home
          </NavigationLink>
          <NavigationLink>Admin</NavigationLink>
          <NavigationLink>Import</NavigationLink>
        </Navigation>
        <ContentPane flexDirection="row">
          <SideNavigation {...this.props} />
          <ImportForm {...this.props} />
        </ContentPane>
      </ContentPane>
    );
  }
}
