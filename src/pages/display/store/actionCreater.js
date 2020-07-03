/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:49:28
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 19:58:57
 */
import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";
import cookies from "react-cookies";
import { url } from "../../../secure";
/**
 * perform usual search
 * @param {String} value
 * @param {Number} page
 */
export const searchCourse = (value, page) => {
  //save query in cookie
  cookies.save("query", value, { path: "/" });
  cookies.remove("prof");
  cookies.remove("breadths");
  return (dispatch) => {
    //clear previous search
    dispatch(clearSearch());
    if (!page) page = 1;
    axios
      .get(`${url}/search/${value}/${page}`)
      .then((response) => {
        let responseData = response.data.data;
        const result = {
          type: constants.SEARCH_COURSE,
          courses: fromJS(responseData),
          total: fromJS(response.data.total),
          page: fromJS(page),
          value: fromJS(value),
          didSearch: true,
        };
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false,
        });
        dispatch(result);
      })
      .catch((error) => {
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false,
        });
      });
  };
};
/**
 * search course by it's breadth
 * @param {String} value
 * @param {Number} page
 * @param {String} breadths
 */
export const searchBreadths = (value, page, breadths) => {
  cookies.save("breadths", breadths, { path: "/" });
  cookies.save("query", value, { path: "/" });
  cookies.save("page", page, { path: "/" });
  cookies.remove("prof");
  breadths = breadths.join("");
  if (value === "") value = "all";
  return (dispatch) => {
    //clear exsiting courses before searching
    dispatch({
      type: constants.CLEAR_COURSE,
      loading: true,
      courses: fromJS([]),
      profs: fromJS([]),
      didSearch: true,
    });
    axios
      .get(`${url}/breadth/${value}/${breadths}/${page}`)
      .then((response) => {
        let responseData = response.data.data;
        const result = {
          type: constants.SEARCH_COURSE,
          courses: fromJS(responseData),
          total: fromJS(response.data.total),
          page: fromJS(page),
          value: fromJS(value),
        };
        dispatch(result);
        //signal that searching is done
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false,
        });
      })
      .catch((error) => {
        // if failed, do not load data
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false,
        });
      });
  };
};
/**
 * search a professor by name
 * @param {String} name
 */
export const searchProfs = (name) => {
  //save professor's information in cookie
  cookies.save("prof", name, { path: "/" });
  cookies.remove("breadths");

  return (dispatch) => {
    dispatch(clearSearch());
    axios
      .get(`${url}/prof/${name}`)
      .then((response) => {
        let responseData = response.data.data;
        const result = {
          type: constants.SEARCH_PROF,
          profs: fromJS(responseData),
          value: fromJS(name),
        };
        dispatch(result);
        // signal that searching is done
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false,
        });
      })
      .catch((error) => {
        // if failed, do not load data
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false,
        });
      });
  };
};
/**
 * change breadths in state
 * @param {List} breadths
 */
export const changeBreadth = (breadths) => ({
  type: constants.CHANGE_BREADTH,
  breadths: fromJS(breadths),
});
/**
 * clear search result
 */
export const clearSearch = () => ({
  type: constants.CLEAR_COURSE,
  loading: true,
  profs: fromJS([]),
  courses: fromJS([]),
  didSearch: true,
});
