/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:51:11
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 19:41:26
 */
import axios from "axios";
import * as constants from "./actionTypes";
import cookies from "react-cookies";
import { url } from "../../../secure/index";

const defaultDetail = {
  type: constants.GET_COURSE,
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
};

const defaultGrade = {
  A: 0,
  AB: 0,
  B: 0,
  BC: 0,
  C: 0,
  D: 0,
  others: 0,
  total: 0,
  term: "Cumulative",
};
/**
 * Signal that search begins
 */
export const searchBegin = () => ({
  type: constants.SEARCH_BEGIN,
  isSearch: true,
});

/**
 * find course by course id
 * @param {String} id
 */
export const getCourse = (id, mess) => {
  //save course id in cookie
  cookies.save("id", id, { path: "/" });
  return (dispatch) => {
    dispatch(defaultDetail);
    axios
      .get(`${url}/course/${id}`)
      .then((res) => {
        res = res.data;
        let result = {
          type: constants.GET_COURSE,
          grades: res.grades,
          abb: res.abb,
          name: res.name,
          number: res.number,
          description: res.description,
          credit: res.credit,
          college: res.college,
          breadth: res.breadths,
          lastTaught: res.last_taught,
          level: res.level,
          offered: res.offered,
          requisite: res.requisite,
          repeatable: res.repeatable === "Y",
          profsList: res.profs_list,
        };
        //grades is empty
        if (!result.grades) {
          dispatch(result);
          return;
        }
        let totalGrades = defaultGrade;
        let termList = [];
        for (let i = 0; i < result.grades.length; ++i) {
          let item = result.grades[i].cumulative;
          termList.push(result.grades[i].semester);
          totalGrades.A += item.A;
          totalGrades.AB += item.AB;
          totalGrades.B += item.B;
          totalGrades.BC += item.BC;
          totalGrades.C += item.C;
          totalGrades.D += item.D;
          totalGrades.total += item.total;
        }
        //compute other grade
        totalGrades.others =
          totalGrades.total -
          totalGrades.A -
          totalGrades.AB -
          totalGrades.B -
          totalGrades.BC -
          totalGrades.C -
          totalGrades.D;
        result.totalGrades = totalGrades;
        result.termList = termList;
        dispatch(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
/**
 * change term of display
 * @param {String} term
 */
export const changeTerm = (term) => ({
  type: constants.CHANGE_TERM,
  term: term,
});
/**
 * change grade in redux
 * @param {Object} grade
 */
export const changeGrade = (grade) => ({
  type: constants.CHANGE_GRADE,
  grade: grade,
});
/**
 * change professor in redux
 * @param {String} name
 */
export const changeProf = (name) => ({
  type: constants.CHANGE_PROF,
  name: name,
  termChoice: "Cumulative",
});
/**
 * upate value in state
 * @param {String} value
 */
export const changeValue = (value) => ({
  type: constants.CHANGE_VALUE,
  value: value,
});
