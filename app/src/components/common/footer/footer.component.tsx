import React, { FunctionComponent } from "react";
import { Link, Pane, Heading } from "evergreen-ui";
import { Routes } from "../../../utils";

const routes = [
  {
    title: "Administration",
    content: [
      {
        title: "Admin",
        ...Routes.Admin.Home,
      },
    ],
  },
  {
    title: "Help",
    content: [
      {
        title: "FAQ",
        ...Routes.Docs.Faq,
      },
    ],
  },
];

export const PageFooter: FunctionComponent = () => {
  return (
    <Pane>
      {routes.map(({ content, title }, index) => (
        <Pane
          margin={16}
          display="flex"
          flexDirection="column"
          key={`footer-${index}`}
        >
          <Heading>{title}</Heading>
          {content.map((link, i) => (
            <Link key={`link-${index}-${i}`} href={link.path}>
              {link.title}
            </Link>
          ))}
        </Pane>
      ))}
    </Pane>
  );
};
