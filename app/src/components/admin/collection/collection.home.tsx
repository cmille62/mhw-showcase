import React, { FunctionComponent } from "react";
import { Card, Link, Pane } from "evergreen-ui";
import { Routes, structureRoute } from "../../../utils";
import { Page } from "../../common";

const options = [
  { title: "Caliber", value: "caliber" },
  { title: "Action Type", value: "action" },
  { title: "Category", value: "category" },
  { title: "Manufacturer", value: "manufacturer" },
  { title: "Safety", value: "safety" },
];

export const CollectionHome: FunctionComponent = () => {
  return (
    <Page>
      <Pane display="flex" flexDirection="column" width="100%">
        {options.map((option) => (
          <Card
            background="tint2"
            margin={8}
            padding={8}
            width="100%"
            key={`list-${option.value}`}
          >
            <Link
              href={structureRoute(Routes.Admin.Collection.Router, {
                collection: option.value,
              })}
            >
              {option.title}
            </Link>
          </Card>
        ))}
      </Pane>
    </Page>
  );
};
