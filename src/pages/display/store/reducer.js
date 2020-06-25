/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:59:43
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 10:59:43
 */
import * as constants from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  value: "",
  courses: fromJS([]),
  loading: false,
  profs: fromJS([]),
  total: 0,
  page: 0,
  breadths: [],
  didSearch: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_COURSE:
      return state.merge({
        courses: action.courses,
        total: action.total,
        page: action.page,
        value: action.value,
        didSearch: action.didSearch,
      });
    case constants.CLEAR_COURSE:
      return state.merge({
        courses: action.courses,
        loading: action.loading,
        didSearch: action.didSearch,
        profs: action.profs,
      });
    case constants.SEARCH_DONE:
      return state.set("loading", action.loading);
    case constants.CHANGE_BREADTH:
      return state.set("breadths", action.breadths);
    case constants.SEARCH_PROF:
      return state.set("profs", action.profs);
    default:
      return state;
  }
};
