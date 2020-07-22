import { State, Actions } from "../defs";

export const appReducer = (state: State, action: Actions) => {
  console.log(action);
  switch (action.type) {
    case "INIT_APP":
      return {
        ...state,
      };
    case "SET_THEME_DARK":
      return {
        ...state,
        theme: "dark",
        primaryTheme: "is-black",
        secondaryTheme: "is-dark",
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
        primaryTheme: "is-white",
        secondaryTheme: "is-link",
      };
    default:
      throw new Error("reducer error");
  }
};
