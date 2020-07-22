import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { State } from "./defs";

import { AppProvider } from "./hooks/appProvider";
import { appReducer } from "./reducers/appReducer";

import { Home } from "./routes/Home";
import { ChangeTheme } from "./routes/ChangeTheme";
import { Header } from "./components/Header";

const initialState: State = {
  theme: "dark",
  primaryTheme: "is-black",
  secondaryTheme: "is-dark",
};

export const App = () => {
  const state = useReducer(appReducer, initialState);
  return (
    <AppProvider value={state}>
      <Router>
        <Switch>
          <Route path="/change-theme">
            <Header />
            <ChangeTheme />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  );
};
