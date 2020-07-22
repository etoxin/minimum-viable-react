import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { State } from "./defs";

import { AppProvider } from "./hooks/appProvider";
import { appReducer } from "./reducers/appReducer";

import { Home } from "./routes/Home";
import { Page } from "./routes/Page";
import { Header } from "./components/Header";

const initialState: State = {
  primaryTheme: "is-black",
  secondaryTheme: "is-dark",
};

export const App = () => (
  <AppProvider value={useReducer(appReducer, initialState)}>
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
  </AppProvider>
);
