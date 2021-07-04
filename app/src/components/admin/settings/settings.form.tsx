import React, { FunctionComponent, useEffect } from "react";
import { Pane, Heading, Button } from "evergreen-ui";
import { observer } from "mobx-react";
import { SettingsAPI } from "../../../services";
import { useRootStore } from "../../../stores";
import { Setting } from "../../common";

export const SettingsForm: FunctionComponent = observer(() => {
  const { settingsStore } = useRootStore();

  useEffect(() => {
    SettingsAPI.get().then((response) => {
      if (response.status === 200) {
        settingsStore.set(response.data);
        settingsStore.setPreview(response.data);
      }
    });
  }, [settingsStore]);

  const setSettings = async () => {
    const response = await SettingsAPI.update(settingsStore.preview);
    if (response.status === 200) {
      const { preview } = settingsStore;
      preview._id = settingsStore.settings._id;
      settingsStore.set(preview);
    }
  };

  const setLive = (live: boolean) => {
    const { preview } = settingsStore;
    preview.live = live;
    settingsStore.setPreview(preview);
  };

  if (!settingsStore.preview._id) {
    return null;
  }

  return (
    <Pane
      id="settingsPane"
      display="flex"
      flexDirection="column"
      marginBottom="auto"
      marginLeft={20}
      width="100%"
    >
      <Pane display="flex" flexDirection="row">
        <Heading size={800} marginBottom={10}>
          Settings
        </Heading>
        <Button
          id="update"
          appearance="primary"
          fontSize={12}
          marginLeft="auto"
          marginBottom={10}
          onClick={() => setSettings()}
        >
          Update
        </Button>
      </Pane>

      <Setting
        title="Turn off Site"
        description="Prevent users from accessing the site"
        value={settingsStore.preview.live}
        onChange={(value) => setLive(value)}
      />
    </Pane>
  );
});
