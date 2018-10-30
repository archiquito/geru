const INITIAL_STATE = { description: "", list: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_API_LIST":
      console.log("reducerStatecountry-GETAPI", action.payload);
      return { ...state, list: action.payload };
    case "DESCRIPTION_CHANGED":
      console.log("DESCRIPTION_CHANGED-REDUCER", action.payload);
      return { ...state, description: action.payload };
    case "POST_ADD":
      console.log("POST_ADD", action.payload);
      return { ...state, description: "" };
    case "TODO_SEARCHED":
      return { ...state, list: action.payload };
    case "TODO_CLEAR":
      return { ...state, description: "" };
    default:
      return state;
  }
};
