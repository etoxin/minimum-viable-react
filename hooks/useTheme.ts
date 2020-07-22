import { useAppContext } from "./useAppContext";

export const useTheme = () => {
  const { state, dispatch } = useAppContext();

  return {
    changeTheme: (theme) => {
      dispatch({ type: `SET_THEME_${theme.toUpperCase()}` });
    },
    isTheme: (theme) => theme === state.theme,
    primary: state.primaryTheme,
    secondary: state.secondaryTheme,
  };
};
