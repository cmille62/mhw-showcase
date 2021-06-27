import React, { FunctionComponent } from "react";
import { Pane, Button, Heading } from "evergreen-ui";
import { observer } from "mobx-react";
import { useRootStore } from "../../../stores";
import { Routes, structureRoute } from "../../../utils";

const SELECTED = "#E4E7EB";

const navigation = [
  {
    title: "Products",
    key: "products",
    content: [
      {
        title: "Add",
        key: "add",
        ...Routes.Admin.Products.Add,
      },
      {
        title: "View All",
        key: "view-all",
        ...Routes.Admin.Products.ViewAll,
      },
      {
        title: "Import",
        key: "import",
        ...Routes.Admin.Products.Import,
      },
    ],
  },
  {
    title: "Collections",
    key: "collections",
    content: [
      {
        title: "View All",
        key: "collections-view-all",
        ...Routes.Admin.Collection.Home,
      },
    ],
  },
  {
    title: "System",
    key: "system",
    content: [
      {
        title: "Settings",
        key: "settings",
        ...Routes.Admin.Settings,
      },
      {
        title: "Version",
        key: "version",
        ...Routes.Admin.Version,
      },
    ],
  },
];

export const SideNavigation: FunctionComponent = observer(() => {
  const { routerStore } = useRootStore();
  const path = routerStore.location.pathname;
  return (
    <Pane
      className="side-navigation"
      display="flex"
      flexDirection="column"
      minWidth={150}
      height="100%"
      marginBottom="auto"
      borderRight
    >
      {navigation.map(({ title, content, key }) => (
        <React.Fragment key={key}>
          <Heading size={400} marginBottom={5}>
            {title}
          </Heading>
          {content.map((child, index) => (
            <Pane
              key={`navigation-${index}`}
              backgroundColor={path === child.path ? SELECTED : ""}
            >
              <Button
                id="settings"
                appearance="minimal"
                width="100%"
                is="a"
                href={child.path}
              >
                {child.title}
              </Button>
            </Pane>
          ))}
        </React.Fragment>
      ))}
    </Pane>
  );
});

export default SideNavigation;
