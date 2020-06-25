/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:09:46
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-06-25 11:11:54
 */
import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";
import { url } from "../../../secure/index";
import cookies from "react-cookies";

/**
 * Foucus on search
 */
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

/**
 * search blur
 */
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

/**
 * perform usal search
 * @param {String} value
 * @param {Number} page
 */
export const searchCourse = (value, page) => {
  //save query in cookie
  cookies.save("query", value, { path: "/" });

  return (dispatch) => {
    //clear previous search
    clearSearch();

    axios
      .get(url + "search?query=" + value + "&page=" + page)
      .then((response) => {
        let responseData = response.data.data;
        const result = {
          type: constants.SEARCH_COURSE,
          courses: fromJS(responseData),
          total: fromJS(response.data.total),
          page: fromJS(page),
          value: fromJS(value),
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
 *
 */
export const clearSearch = () => ({
  type: constants.CLEAR_COURSE,
  loading: true,
  courses: [],
});
