import * as stores from './index';
import { syncHistoryWithStore, SynchronizedHistory } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
// import { History } from 'history';

export class RootStore {
  public history: SynchronizedHistory;
  public routerStore: stores.RouterStore;
  public settingsStore: stores.SettingsStore;

  public constructor() {
    const browserHistory = createBrowserHistory();

    this.routerStore = new stores.RouterStore();
    this.history = syncHistoryWithStore(browserHistory, this.routerStore);
    this.settingsStore = new stores.SettingsStore();
  }

  public getProviderStores() {
    return {
      routerStore: this.routerStore,
      settingsStore: this.settingsStore,
    };
  }
}
