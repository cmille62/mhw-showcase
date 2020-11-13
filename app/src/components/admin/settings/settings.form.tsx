import * as React from "react";
import { Pane, Heading, Button, Label, Switch, Text } from "evergreen-ui";
import { inject, observer } from "mobx-react";
import { SettingsStore } from "../../../stores";
import { SettingsAPI } from "../../../services";

interface Props {
  settingsStore: SettingsStore;
}

@inject("settingsStore")
@observer
class SettingsForm extends React.Component<Props, {}> {
  async componentDidMount() {
    const response = await SettingsAPI.get();
    if (response.status === 200) {
      this.props.settingsStore.set(response.data);
      this.props.settingsStore.setPreview(response.data);
    }
  }

  private setSettings = async () => {
    const response = await SettingsAPI.update(this.props.settingsStore.preview);
    if (response.status === 200) {
      const { preview } = this.props.settingsStore;
      preview.id = this.props.settingsStore.settings.id;
      this.props.settingsStore.set(preview);
    }
  };

  setLive(live: boolean) {
    const { preview } = this.props.settingsStore;
    preview.live = live;
    this.props.settingsStore.setPreview(preview);
  }

  render() {
    return (
      <Pane
        id="settingsPane"
        display="flex"
        flexDirection="column"
        marginBottom="auto"
        marginLeft={20}
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
            onClick={() => {
              this.setSettings();
            }}
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
            checked={
              this.props.settingsStore.preview.live
            }
            onChange={(e: any) => this.setLive(e.target.checked)}
          />
        </Pane>
      </Pane>
    );
  }
}

export default SettingsForm;
