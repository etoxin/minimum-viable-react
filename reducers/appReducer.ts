export const appReducer = (state, action) => {
  switch (action.type) {
    case "INIT_APP":
      return {
        ...state,
      };
    default:
      throw new Error("reducer error");
  }
};
