import React, { FunctionComponent } from "react";
import { inject, observer } from "mobx-react";
import { Pane } from "evergreen-ui";
import { Checkbox, Dropdown } from "../inputs";
import { PreferencesStore } from "../../../stores";
import { ITEMS_PER_PAGE_LIST, SORT_BY_LIST } from "../../../typings";
import { formatOptions } from "../inputs/dropdown.input";
import { set } from "lodash";

interface Props {
  preferencesStore: PreferencesStore;
}

export const PreferencesList: FunctionComponent<Props> = inject(
  "preferencesStore"
)(
  observer((props: Props) => {
    const preferencesStore = props.preferencesStore;

    const update = (key: string, value: string | boolean | number) => {
      const { preview } = preferencesStore;

      set(preview, key, value);

      console.log(preview);
      preferencesStore.setPreview(preview);
    };

    const updateItemsPerPage = (value: number) => {
      const preferencesStore = props.preferencesStore;
      const { preview } = preferencesStore;

      preview.itemsPerPage = value as any;

      preferencesStore.setPreview(preview);
    };

    console.log(preferencesStore);
    return (
      <Pane>
        {props.preferencesStore.preview.sortBy}
        <Dropdown
          title="Sort By"
          options={formatOptions(SORT_BY_LIST)}
          value={props.preferencesStore.preview.sortBy}
          onChange={(value) => update("sortBy", value)}
        />
        <Dropdown
          title="Items Per Page"
          options={formatOptions(ITEMS_PER_PAGE_LIST)}
          value={props.preferencesStore.preview.itemsPerPage}
          onChange={
            (value) => updateItemsPerPage(parseInt(value.toString()))
            // update("itemsPerPage", parseInt(value.toString()))
          }
        />
        <Checkbox
          title="Show Images"
          value={props.preferencesStore.preview.viewImages}
          onChange={(value) => update("viewImages", value)}
        />
        <Checkbox
          title="Hide Out of Stock"
          value={props.preferencesStore.preview.hideOOS}
          onChange={(value) => update("hideOOS", value)}
        />
      </Pane>
    );
  })
);
