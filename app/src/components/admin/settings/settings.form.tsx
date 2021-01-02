import React, { FunctionComponent, useEffect } from "react";
import { Pane, Heading, Button, Label, Switch, Text } from "evergreen-ui";
import { observer } from "mobx-react";
import { SettingsAPI } from "../../../services";
import { useRootStore } from "../../../stores";

const SettingsForm: FunctionComponent = observer(() => {
  const { settingsStore } = useRootStore();
  useEffect(() => {
    SettingsAPI.get().then((response) => {
      if (response.status === 200) {
        settingsStore.set(response.data);
        settingsStore.setPreview(response.data);
      }
    });
  }, []);

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

      <Pane>
        <Label htmlFor="collaboration" display="block">
          Turn off Site
        </Label>
        <Text>Prevents users from accessing the site</Text>
        <Switch
          id="collaboration"
          checked={settingsStore.preview.live}
          onChange={({
            target: { checked },
          }: React.ChangeEvent<HTMLInputElement>) => setLive(checked)}
        />
      </Pane>
    </Pane>
  );
});

export default SettingsForm;
