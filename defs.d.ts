export interface State {
  theme: "dark" | "light";
  primaryTheme: "is-black";
  secondaryTheme: "is-dark";
}

export interface Actions {
  type: "INIT_APP" | "SET_THEME_DARK" | "SET_THEME_LIGHT" | "SET_THEME_BLUE";
}
