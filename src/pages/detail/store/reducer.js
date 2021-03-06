/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:58:44
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 19:59:09
 */
import * as constants from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  abb: "",
  number: 0,
  name: "",
  description: "",
  credit: 0,
  college: "",
  breadth: "",
  lastTaught: "",
  level: "",
  offered: "",
  requisite: "",
  repeatable: "",
  currentGrades: {},
  grades: [],
  termList: [],
  totalGrades: {},
  currentTerm: [],
  profsList: [],
  currentProf: "",
  currentValue: "Cumulative",
  isSearch: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_COURSE:
      return state.merge(
        fromJS({
          grades: action.grades,
          abb: action.abb,
          number: action.number,
          description: action.description,
          credit: action.credit,
          college: action.college,
          breadth: action.breadth,
          lastTaught: action.lastTaught,
          level: action.level,
          offered: action.offered,
          requisite: action.requisite,
          repeatable: action.repeatable,
          currentGrades: action.totalGrades,
          name: action.name,
          currentTerm: action.termList,
          totalGrades: action.totalGrades,
          termList: action.termList,
          profsList: action.profsList,
          currentProf: "All",
          currentValue: "Cumulative",
        })
      );
    case constants.CHANGE_GRADE:
      return state.set("currentGrades", fromJS(action.grade));
    case constants.CHANGE_TERM:
      return state.set("currentTerm", fromJS(action.term));
    case constants.CHANGE_PROF:
      return state.set("currentProf", fromJS(action.name));
    case constants.CHANGE_VALUE:
      return state.set("currentValue", fromJS(action.value));
    case constants.SEARCH_BEGIN:
      return state.set("isSearch", fromJS(action.isSearch));
    default:
      return state;
  }
};
