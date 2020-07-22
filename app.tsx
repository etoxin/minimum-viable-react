import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./routes/Home";
import { Page} from "./routes/Page";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/page">
        <Page />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
