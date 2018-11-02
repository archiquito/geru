import axios from "axios";

const URL = "http://5bce4f29a0c99b001337aa00.mockapi.io/api/v1/todoList";

export const changeDescription = event => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value
});

export const changeDescriptionEdit = event => ({
  type: "DESCRIPTION_EDITED",
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;

    const search = description
      ? URL + "/" + description
      : URL + "?sortBy=createdAt&order=desc";
    console.log(search);
    axios
      .get(search)
      .then(resp => dispatch({ type: "TODO_SEARCHED", payload: resp.data }))
      .catch(error => {
        const arrError = {
          hasError: true,
          info: error.message
        };
        dispatch({
          type: "HAS_ERROR",
          payload: [arrError]
        });
      });
  };
};
export const clear = () => {
  return [{ type: "TODO_CLEAR" }, search()];
};

export const add = description => {
  return dispatch => {
    if (description !== "") {
      axios
        .post(URL, { description })
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
        .catch(error => {
          const arrError = {
            hasError: true,
            info: error.message
          };
          dispatch({
            type: "HAS_ERROR",
            payload: [arrError]
          });
        });
    } else {
      dispatch(search());
      dispatch({
        type: "DESCRIPTION_EMPTY",
        payload: ""
      });
    }
  };
};

export const addEdit = (descriptionEd, iddesc) => {
  return dispatch => {
    if (descriptionEd !== "") {
      axios
        .put(URL + "/" + iddesc, { description: descriptionEd })
        .then(resp => {
          dispatch(search());
        });
    } else {
      dispatch(search());
      dispatch({
        type: "DESCRIPTION_EMPTY",
        payload: ""
      });
    }
  };
};

export const markAsDone = todo => {
  return dispatch => {
    axios
      .put(URL + "/" + todo, { done: true })
      .then(resp => dispatch(search()))
      .catch(error => {
        const arrError = {
          hasError: true,
          info: error.message
        };
        dispatch({
          type: "HAS_ERROR",
          payload: [arrError]
        });
      });
  };
};

export const markAsPending = todo => {
  return dispatch => {
    axios
      .put(URL + "/" + todo, { done: false })
      .then(resp => dispatch(search()))
      .catch(error => {
        const arrError = {
          hasError: true,
          info: error.message
        };
        dispatch({
          type: "HAS_ERROR",
          payload: [arrError]
        });
      });
  };
};

export const remove = todo => {
  return dispatch => {
    axios
      .delete(URL + "/" + todo.id)
      .then(resp => dispatch(search()))
      .catch(error => {
        const arrError = {
          hasError: true,
          info: error.message
        };
        dispatch({
          type: "HAS_ERROR",
          payload: [arrError]
        });
      });
  };
};

export const getDesc = iddesc => {
  return dispatch => {
    axios.get(URL + "/" + iddesc).then(resp => {
      dispatch({
        type: "DESCRIPTION_EDIT",
        payload: resp.data.description
      });
      dispatch({
        type: "GET_TAGS",
        payload: resp.data.tags
      });
      dispatch({
        type: "DESCRIPTION_ID",
        payload: iddesc
      });
    });
  };
};

export const tagAdd = (idTodoList, tag) => {
  return dispatch => {
    axios
      .post(URL + "/" + idTodoList + "/tags", { text: tag })
      .then(resp => dispatch(getDesc(idTodoList)))
      .then(resp => dispatch(search()));
  };
};

export const deleteTag = (idTag, idTodoList) => {
  return dispatch => {
    axios
      .delete(URL + "/" + idTodoList + "/tags/" + idTag)
      .then(resp => dispatch(getDesc(idTodoList)))
      .then(resp => dispatch(search()));
  };
};
