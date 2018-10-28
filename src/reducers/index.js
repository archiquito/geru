// reducers/index.js

import { combineReducers } from "redux";
import GetListApi from "./todoReducer";

export default combineReducers({
  getlistApi: GetListApi
});
