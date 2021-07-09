import React, { FunctionComponent, useEffect, useState } from "react";
import { InfoText, Page } from "../../common";
import { CollectionAPI } from "../../../services";
import { DocsType } from "../../../typings";

export const FaqContent: FunctionComponent = () => {
  const [data, setData] = useState<DocsType[]>([]);

  useEffect(() => {
    CollectionAPI.getAll("docs").then((result) => setData(result.data));
  }, []);
  return (
    <Page>
      {data.map((each, index) => (
        <InfoText key={`faq-${index}`} {...each} />
      ))}
    </Page>
  );
};
