import React, { FunctionComponent } from "react";
import { inject, observer } from "mobx-react";
import { PreferencesStore, RouterStore } from "../../stores";
import { ContentPane, Navigation, NavigationLink } from "../common";
import { PreferencesList } from "../common/preferences/preferences";

interface Props {
  routerStore: RouterStore;
  preferencesStore: PreferencesStore;
}

export const ShowcasePage: FunctionComponent<Props> = inject(
  "routerStore",
  "preferencesStore"
)(
  observer((props: Props) => {
    console.log(props.preferencesStore.preview);
    return (
      <ContentPane>
        <Navigation>
          <NavigationLink>Showcase</NavigationLink>
        </Navigation>
        <PreferencesList preferencesStore={props.preferencesStore} />
      </ContentPane>
    );
  })
);

export default ShowcasePage;
