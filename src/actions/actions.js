import axios from "axios";

const URL = "http://5bce4f29a0c99b001337aa00.mockapi.io/api/v1/todoList";

export const getApiList = () => {
  return dispatch => {
    axios.get(URL).then(resp => {
      console.log("RESP", resp);
      dispatch({ type: "GET_API_LIST", payload: resp.data });
    });
  };
};

export const search = () => (dispatch, getState) => {
  const description = getState().todo.description;
  const search = description ? `&description__regex=/${description}/` : "";
  axios
    .get(`${URL}?sort=-createdAt${search}`)
    .then(resp => dispatch({ type: "TODO_SEARCHED", payload: resp.data }));
};

export const clear = () => [{ type: "TODO_CLEAR" }, search()];

export const changeDescription = event => {
  console.log("changeDescriptionACT", event);
  return dispatch => dispatch({ type: "DESCRIPTION_CHANGED", payload: event });
};

export const add = description => {
  console.log("ADD", description);
  return dispatch => {
    axios.post(URL, { description }).then(resp => {
      console.log("RESPADD", resp);
      dispatch({ type: "POST_ADD", payload: resp.data });
    });
  };
};

export const markAsDone = todo => dispatch => {
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(resp => dispatch(search()));
};

export const markAsPending = todo => dispatch => {
  axios
    .put(`${URL}/${todo._id}`, { ...todo, done: false })
    .then(resp => dispatch(search()));
};

export const remove = todo => dispatch => {
  axios.delete(`${URL}/${todo._id}`).then(resp => dispatch(search()));
};
