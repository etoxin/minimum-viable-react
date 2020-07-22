import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./routes/Home";
import { Page } from "./routes/Page";
import { Header } from "./components/Header";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/page">
        <Header />
        <Page />
      </Route>
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  </Router>
);
