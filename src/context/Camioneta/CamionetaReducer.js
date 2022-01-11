//funciones que modificaran el estado global
const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...action.payload,
      };

    default:
      return globalState;
  }
};
export default reducer;
