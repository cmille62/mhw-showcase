import * as stores from './index';
import { syncHistoryWithStore, SynchronizedHistory } from 'mobx-react-router';
import { createBrowserHistory } from 'history';

export class RootStore {
  public history: SynchronizedHistory;
  public routerStore: stores.RouterStore;
  public importStore: stores.ImportStore;
  public preferencesStore: stores.PreferencesStore;
  public settingsStore: stores.SettingsStore;

  public constructor() {
    const browserHistory = createBrowserHistory();

    //TODO: Fetch UID from cookies
    const uid = ""; 

    this.routerStore = new stores.RouterStore();
    this.history = syncHistoryWithStore(browserHistory, this.routerStore);
    this.importStore = new stores.ImportStore();
    this.settingsStore = new stores.SettingsStore();
    this.preferencesStore = new stores.PreferencesStore(uid);
  }

  public getProviderStores() {
    return {
      routerStore: this.routerStore,
      importStore: this.importStore,
      settingsStore: this.settingsStore,
      preferencesStore: this.preferencesStore,
    };
  }
}
