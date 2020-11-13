import * as stores from './index';
import { syncHistoryWithStore, SynchronizedHistory } from 'mobx-react-router';
import { createBrowserHistory } from 'history';

export class RootStore {
  public history: SynchronizedHistory;
  public routerStore: stores.RouterStore;
  public importStore: stores.ImportStore;
  public settingsStore: stores.SettingsStore;

  public constructor() {
    const browserHistory = createBrowserHistory();

    this.routerStore = new stores.RouterStore();
    this.history = syncHistoryWithStore(browserHistory, this.routerStore);
    this.importStore = new stores.ImportStore();
    this.settingsStore = new stores.SettingsStore();
  }

  public getProviderStores() {
    return {
      routerStore: this.routerStore,
      importStore: this.importStore,
      settingsStore: this.settingsStore,
    };
  }
}
