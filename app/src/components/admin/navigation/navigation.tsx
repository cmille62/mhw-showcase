import * as React from "react";
import { Pane, Button, Heading } from "evergreen-ui";
import { observer } from "mobx-react";
import { RouterStore } from "../../../stores";
import { Routes } from "../../../utils";

interface Props {
  routerStore: RouterStore;
}

const SELECTED = "#E4E7EB";

const navigation = [
  {
    title: "Products",
    key: "products",
    content: [
      {
        title: "Import",
        key: "import",
        path: Routes.Admin.Import.path,
      },
    ]
  },
  {
    title: "System",
    key: "system",
    content: [
      {
        title: "Settings",
        key: "settings",
        path: Routes.Admin.Settings.path,
      },
    ],
  },
];

@observer
export class SideNavigation extends React.Component<Props, {}> {
  render() {
    const path = this.props.routerStore.location.pathname;
    return (
      <Pane
        className="side-navigation"
        display="flex"
        flexDirection="column"
        minWidth={150}
        marginBottom="auto"
        borderRight
      >
        {navigation.map(({ title, content, key }) => (
          <React.Fragment key={key}>
            <Heading size={400} marginBottom={5}>
              {title}
            </Heading>
            {content.map((child) => (
              <Pane backgroundColor={path === child.path ? SELECTED : ""}>
                <Button
                  id="settings"
                  appearance="minimal"
                  width="100%"
                  onClick={() => {
                    this.props.routerStore.push(child.path);
                  }}
                >
                  {child.title}
                </Button>
              </Pane>
            ))}
          </React.Fragment>
        ))}
      </Pane>
    );
  }
}

export default SideNavigation;
