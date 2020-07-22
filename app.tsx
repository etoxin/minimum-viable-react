import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./routes/Home";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/page">
        <p>Page</p>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
