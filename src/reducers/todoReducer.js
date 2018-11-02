// // const INITIAL_STATE = { description: "", list: [] };

// // export default (state = INITIAL_STATE, action) => {
// //   switch (action.type) {
// //     case "GET_API_LIST":
// //       console.log("reducerStatecountry-GETAPI", action.payload);
// //       return { ...state, list: action.payload };
// //     case "DESCRIPTION_CHANGED":
// //       console.log("DESCRIPTION_CHANGED-REDUCER", action.payload);
// //       return { ...state, description: action.payload };
// //     case "POST_ADD":
// //       console.log("POST_ADD", action.payload);
// //       return { ...state, description: "" };
// //     case "TODO_SEARCHED":
// //       return { ...state, list: action.payload };
// //     case "TODO_CLEAR":
// //       return { ...state, description: "" };
// //     default:
// //       return state;
// //   }
// // };

// const INITIAL_STATE = { description: "", list: [] };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "GET_API_LIST":
//       return { ...state, list: action.payload };
//     case "DESCRIPTION_CHANGED":
//       return { ...state, description: action.payload };
//     case "TODO_SEARCHED":
//       return { ...state, list: action.payload };
//     case "TODO_CLEAR":
//       return { ...state, description: "" };
//     default:
//       return state;
//   }
// };

const INITIAL_STATE = {
  description: "",
  list: [],
  erroDesc: "Adicione uma tarefa",
  descriptionEdit: "",
  idDescription: ""
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
    default:
      return state;
  }
};
