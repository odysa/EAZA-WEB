/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:12:13
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 11:12:13
 */
import * as constants from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  value: "",
  courses: [],
  loading: false,
  total: 0,
  page: 0,
});

var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.SEARCH_COURSE:
      return state.merge({
        courses: action.courses,
        total: action.total,
        page: action.page,
        value: action.value,
      });
    case constants.CLEAR_COURSE:
      return state.merge({
        courses: action.courses,
        loading: action.loading,
      });
    case constants.SEARCH_DONE:
      return state.set("loading", action.loading);
    default:
      return state;
  }
};
export default reducer;
