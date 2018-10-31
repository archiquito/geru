// reducers/index.js

import { combineReducers } from "redux";
import Todo from "./todoReducer";

export default combineReducers({
  todo: Todo
});
