const INITIAL_STATE = {
  description: "",
  list: [],
  erroDesc: "Adicione uma tarefa",
  descriptionEdit: "",
  idDescription: "",
  tags: [],
  hasError: false,
  infoError: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload };
    case "DESCRIPTION_EDITED":
      return { ...state, descriptionEdit: action.payload };
    case "TODO_SEARCHED":
      return { ...state, list: action.payload };
    case "TODO_CLEAR":
      return { ...state, description: "" };
    case "DESCRIPTION_EMPTY":
      return { ...state, erroDesc: action.payload };
    case "DESCRIPTION_EDIT":
      return { ...state, descriptionEdit: action.payload };
    case "DESCRIPTION_ID":
      return { ...state, idDescription: action.payload };
    case "GET_TAGS":
      return { ...state, tags: action.payload };
    case "HAS_ERROR":
      return {
        ...state,
        hasError: action.payload[0].hasError,
        infoError: action.payload[0].info
      };
    default:
      return state;
  }
};
