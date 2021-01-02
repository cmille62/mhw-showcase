import { observable, action, makeObservable } from "mobx";
import { Preferences, ITEMS_PER_PAGE, SORT_BY } from "../typings";
import { PreferencesAPI } from "../services";

type PreferencesAPI = typeof PreferencesAPI;

export class PreferencesStore {
  uid: string;

  constructor(uid: string) {
    makeObservable(this, {
      preview: observable,
      preferences: observable,
      get: action,
      set: action,
      setPreview: action,
    });

    this.uid = uid;
    this.get();
  }

  public preview: Preferences = {
    sortBy: SORT_BY.Relevance,
    itemsPerPage: ITEMS_PER_PAGE.Default,
    viewImages: true,
    hideOOS: false,
  };

  public preferences: Preferences = {
    sortBy: SORT_BY.Default,
    itemsPerPage: ITEMS_PER_PAGE.Default,
    viewImages: true,
    hideOOS: false,
  };

  public async get() {
    const response = await PreferencesAPI.get(this.uid);
    if (response.status === 200) {
      this.preferences = response.data;
    }
  }

  public set = (updated: Preferences) => {
    this.preferences = updated;
  };

  public setPreview = (updated: Preferences) => {
    this.preview = updated;
  };
}
