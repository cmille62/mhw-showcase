import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Firearms } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/firearm" render={() => <Firearms />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
