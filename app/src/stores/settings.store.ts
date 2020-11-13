import { observable, action } from "mobx";
import { Settings } from "../typings";
import { SettingsAPI } from "../services";

type SettingsAPI = typeof SettingsAPI;

export class SettingsStore {
  @observable public preview: Settings = {
    id: "",
    live: true,
  };

  @observable public settings: Settings = { id: "", live: true };

  constructor() {
    this.get();
  }

  @action public async get() {
    const response = await SettingsAPI.get();
    if (response.status === 200) {
      this.settings = response.data;
    }
  }

  @action public set = (updated: Settings) => {
    this.settings = updated;
  };

  @action public setPreview = (updated: Settings) => {
    this.preview = updated;
  };
}
