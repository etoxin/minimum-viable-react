import { useContext } from "react";
import { AppContext } from "./appProvider";
import { State } from "../defs";

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  return {
    state: appContext[0] as State,
    dispatch: appContext[1],
  };
};
