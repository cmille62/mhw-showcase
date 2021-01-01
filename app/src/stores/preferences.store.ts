import { observable, action } from "mobx";
import { Preferences, ITEMS_PER_PAGE, SORT_BY } from "../typings";
import { PreferencesAPI } from "../services";

type PreferencesAPI = typeof PreferencesAPI;

export class PreferencesStore {
    uid: string;

  @observable public preview: Preferences = {
    sortBy: SORT_BY.Relevance,
    itemsPerPage: ITEMS_PER_PAGE.Default,
    viewImages: true,
    hideOOS: false,
  };

  @observable public preferences: Preferences = {
    sortBy: SORT_BY.Default,
    itemsPerPage: ITEMS_PER_PAGE.Default,
    viewImages: true,
    hideOOS: false,
  };

  constructor(uid: string) {
    this.uid = uid;
    this.get();
  }

  @action public async get() {
    const response = await PreferencesAPI.get(this.uid);
    if (response.status === 200) {
      this.preferences = response.data;
    }
  }

  @action public set = (updated: Preferences) => {
    this.preferences = updated;
  };

  @action public setPreview = (updated: Preferences) => {
    this.preview = updated;
    console.log(this.preview);
  };
}
