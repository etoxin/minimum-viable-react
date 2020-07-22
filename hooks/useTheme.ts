import { useEffect } from "react";
import { useAppContext } from "./useAppContext";

export const useTheme = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {});

  return {
    primary: state.primaryTheme,
    secondary: state.secondaryTheme,
  };
};
