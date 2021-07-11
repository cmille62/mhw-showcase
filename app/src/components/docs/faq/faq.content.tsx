import React, { FunctionComponent, useEffect, useState } from "react";
import { MultiSelectField, InfoText, Page, InputWrapper } from "../../common";
import { CollectionAPI } from "../../../services";
import { DocsType } from "../../../typings";
import { FilterIcon } from "evergreen-ui";
import { intersection, union } from "lodash";

export const FaqContent: FunctionComponent = () => {
  const [data, setData] = useState<DocsType[]>([]);
  const [filter, setFilter] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    CollectionAPI.getAll("docs").then((result) => {
      setData(result.data);

      let list: string[] = [];
      result.data.forEach((each: DocsType) => {
        list = union(list, each.category);
      });
      setOptions(list);
    });
  }, []);

  return (
    <Page>
      <InputWrapper iconBefore={FilterIcon}>
        <MultiSelectField
          values={options}
          onChange={(values) => setFilter(values)}
        />
      </InputWrapper>
      {data.map((each, index) => {
        if (filter.length && !intersection(each.category, filter).length) {
          return null;
        }
        return <InfoText key={`faq-${index}`} {...each} />;
      })}
    </Page>
  );
};
