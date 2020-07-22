import { AppState, Actions } from "../defs";

export const appReducer = (state: AppState, action: Actions): AppState => {
  switch (action.type) {
    case "INIT_APP":
      return {
        ...state,
      };
    case "SET_THEME_DARK":
      return {
        ...state,
        theme: "dark",
        primaryTheme: "is-dark",
        secondaryTheme: "is-black",
      };
    case "SET_THEME_LIGHT":
      return {
        ...state,
        theme: "light",
        primaryTheme: "is-light",
        secondaryTheme: "is-white",
      };
    case "SET_THEME_BLUE":
      return {
        ...state,
        theme: "blue",
        primaryTheme: "is-link",
        secondaryTheme: "is-white",
      };
    default:
      throw new Error("reducer error");
  }
};
