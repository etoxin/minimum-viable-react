import { useAppContext } from "./useAppContext";
export const useNavigation = () => {
  const { state, dispatch } = useAppContext();
  return {
    onClick: () => dispatch({ type: "TOGGLE_NAVIGATION" }),
    closeNavigation: () => dispatch({ type: "CLOSE_NAVIGATION" }),
    isActive: state.isNavActive ? "is-active" : "",
  };
};
