// import axios from "axios";

// const URL = "http://5bce4f29a0c99b001337aa00.mockapi.io/api/v1/todoList";

// // export const getApiList = () => {
// //   return dispatch => {
// //     axios.get(URL).then(resp => {
// //       console.log("RESP111", resp);
// //       dispatch({ type: "GET_API_LIST", payload: resp.data });
// //     });
// //   };
// // };

// export const search = () => (dispatch, getState) => {
//   const description = getState().todo.description;
//   console.log("SEARCG", description);
//   //const search = description ? `&description__regex=/${description}/` : "";
//   axios
//     .get(URL)
//     .then(resp => dispatch({ type: "TODO_SEARCHED", payload: resp.data }));
// };

// export const clear = () => {
//   return [{ type: "TODO_CLEAR" }, search()];
// };

// export const changeDescription = event => ({
//   type: "DESCRIPTION_CHANGED",
//   payload: event.target.value
// });

// export const add = description => {
//   console.log("ADD", description);
//   return dispatch => {
//     axios.post(URL, { description }).then(resp => {
//       console.log("RESPADD", resp);
//       dispatch({ type: "POST_ADD", payload: resp.data });
//     });
//   };
// };

// export const markAsDone = todo => dispatch => {
//   axios
//     .put(`${URL}/${todo._id}`, { ...todo, done: true })
//     .then(resp => dispatch(search()));
// };

// export const markAsPending = todo => dispatch => {
//   axios
//     .put(`${URL}/${todo._id}`, { ...todo, done: false })
//     .then(resp => dispatch(search()));
// };

// export const remove = todo => dispatch => {
//   axios.delete(`${URL}/${todo.id}`).then(resp => dispatch(search()));
// };

import axios from "axios";

const URL = "http://5bce4f29a0c99b001337aa00.mockapi.io/api/v1/todoList/";

export const changeDescription = event => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? URL + "/" + description : URL;
    axios
      .get(search)
      .then(resp => dispatch({ type: "TODO_SEARCHED", payload: resp.data }));
  };
};
export const clear = () => {
  return [{ type: "TODO_CLEAR" }, search()];
};

export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(resp => dispatch(clear()))
      .then(resp => dispatch(search()));
  };
};

export const markAsDone = todo => {
  return dispatch => {
    axios
      .put(URL + todo.id, { ...todo, done: true })
      .then(resp => dispatch(search()));
  };
};

export const markAsPending = todo => {
  return dispatch => {
    console.log(`${URL}/${todo.id}`);
    axios
      .put(`${URL}/${todo.id}`, { ...todo, done: false })
      .then(resp => dispatch(search()));
  };
};

export const remove = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo.id}`).then(resp => dispatch(search()));
  };
};
