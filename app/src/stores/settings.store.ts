import { observable, action, makeObservable } from "mobx";
import { Settings } from "../typings";
import { SettingsAPI } from "../services";

type SettingsAPI = typeof SettingsAPI;

export class SettingsStore {
  constructor() {
    makeObservable(this, {
      preview: observable,
      settings: observable,
      get: action,
      set: action,
      setPreview: action,
    });

    this.get();
  }

  public preview: Settings = {
    _id: "",
    live: true,
  };

  public settings: Settings = { _id: "", live: true };

  public async get() {
    const response = await SettingsAPI.get();
    if (response.status === 200) {
      this.settings = response.data;
    }
  }

  public set = (updated: Settings) => {
    this.settings = updated;
  };

  public setPreview = (updated: Settings) => {
    this.preview = updated;
  };
}
