import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AppState } from "./defs";

import { AppProvider } from "./hooks/appProvider";
import { appReducer } from "./reducers/appReducer";

import Home from "./routes/Home";
import ChangeTheme from "./routes/ChangeTheme";
import Header from "./components/Header";

const queryClient = new QueryClient();

const initialState: AppState = {
  theme: "dark",
  primaryTheme: "is-dark",
  secondaryTheme: "is-black",
  isNavActive: false,
  newsItems: [],
};

export function App() {
  const state = useReducer(appReducer, initialState);
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
