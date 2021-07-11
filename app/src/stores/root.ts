import * as stores from "./index";
import { syncHistoryWithStore, SynchronizedHistory } from "mobx-react-router";
import { createBrowserHistory } from "history";

export class RootStore {
  public history: SynchronizedHistory;
  public routerStore: stores.RouterStore;
  public collectionStore: stores.CollectionStore;
  public importStore: stores.ImportStore;
  public preferencesStore: stores.PreferencesStore;
  public productStore: stores.ProductStore;
  public settingsStore: stores.SettingsStore;

  public constructor() {
    const browserHistory = createBrowserHistory();

    //TODO: Fetch UID from cookies
    const uid = "";

    this.routerStore = new stores.RouterStore();
    this.history = syncHistoryWithStore(browserHistory, this.routerStore);
    this.collectionStore = new stores.CollectionStore();
    this.importStore = new stores.ImportStore();
    this.preferencesStore = new stores.PreferencesStore(uid);
    this.productStore = new stores.ProductStore();
    this.settingsStore = new stores.SettingsStore();
  }

  public getProviderStores() {
    return {
      routerStore: this.routerStore,
      collectionStore: this.collectionStore,
      importStore: this.importStore,
      preferencesStore: this.preferencesStore,
      productStore: this.productStore,
      settingsStore: this.settingsStore,
    };
  }
}
