import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RootStore } from '.';

export const useRootStore = () => {
  return React.useContext(MobXProviderContext) as RootStore;
};

export { RouterStore } from 'mobx-react-router';

export { RootStore } from './root';
export { SettingsStore } from './settings.store';
export { ImportStore } from "./import.store";
