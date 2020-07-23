import { useContext } from "react";
import { AppContext } from "./appProvider";
import { AppState } from "../defs";

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  return {
    state: appContext[0] as AppState,
    dispatch: appContext[1],
  };
};
