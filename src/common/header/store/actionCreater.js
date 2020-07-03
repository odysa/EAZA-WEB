/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:09:46
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 17:36:28
 */
import * as constants from "./actionTypes";

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
 *clear search result
 */
export const clearSearch = () => ({
  type: constants.CLEAR_COURSE,
  loading: true,
  courses: [],
});
