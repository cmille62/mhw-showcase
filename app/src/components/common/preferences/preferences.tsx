import React, { FunctionComponent } from "react";
import { observer } from "mobx-react";
import { Pane } from "evergreen-ui";
import { Checkbox, Dropdown, formatOptions } from "../inputs";
import { useRootStore } from "../../../stores";
import { ITEMS_PER_PAGE_LIST, SORT_BY_LIST } from "../../../typings";
import { set } from "lodash";

export const PreferencesList: FunctionComponent = observer(() => {
  const { preferencesStore } = useRootStore();

  const update = (key: string, value: string | boolean | number) => {
    const { preview } = preferencesStore;

    set(preview, key, value);

    console.log(preview);
    preferencesStore.setPreview(preview);
  };

  const updateItemsPerPage = (value: number) => {
    const { preview } = preferencesStore;

    preview.itemsPerPage = value as any;

    preferencesStore.setPreview(preview);
  };
  return (
    <Pane width={150}>
      <Dropdown
        title="Sort By"
        options={formatOptions(SORT_BY_LIST)}
        value={preferencesStore.preview.sortBy}
        onChange={(value) => update("sortBy", value)}
      />
      <Dropdown
        title="Items Per Page"
        options={formatOptions(ITEMS_PER_PAGE_LIST)}
        value={preferencesStore.preview.itemsPerPage}
        onChange={
          (value) => updateItemsPerPage(parseInt(value.toString()))
          // update("itemsPerPage", parseInt(value.toString()))
        }
      />
      <Checkbox
        title="Show Images"
        value={preferencesStore.preview.viewImages}
        onChange={(value) => update("viewImages", value)}
      />
      <Checkbox
        title="Hide Out of Stock"
        value={preferencesStore.preview.hideOOS}
        onChange={(value) => update("hideOOS", value)}
      />
    </Pane>
  );
});
