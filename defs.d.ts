type BulmaThemes = "is-light" | "is-dark" | "is-white" | "is-link" | "is-black";

export interface AppState {
  theme: "dark" | "light" | "blue";
  primaryTheme: BulmaThemes;
  secondaryTheme: BulmaThemes;
}

export interface Actions {
  type: "INIT_APP" | "SET_THEME_DARK" | "SET_THEME_LIGHT" | "SET_THEME_BLUE";
}
