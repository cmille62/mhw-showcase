import React from "react";
import * as ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import { Router } from "react-router";
import { RootStore } from "./stores";
import App from "./app/App";

const rootStore = new RootStore();

ReactDOM.render(
  <Provider {...rootStore.getProviderStores()}>
    <Router history={rootStore.history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
