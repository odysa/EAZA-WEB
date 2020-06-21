import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import axios from 'axios';
import  {url} from '../../../secure/index'
import cookies from 'react-cookies';
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const searchCourse = (value, page) => {
  cookies.save('query', value, { path: '/' });
  return (dispatch) => {
    dispatch({
      type: constants.CLEAR_COURSE,
      loading: true,
      courses: fromJS([]),
    })
    axios.get(url+'search?query=' + value + '&page=' + page)
      .then(response => {
        let responseData = response.data.data;
        const result = {
          type: constants.SEARCH_COURSE,
          courses: fromJS(responseData),
          total: fromJS(response.data.total),
          page: fromJS(page),
          value: fromJS(value)
        }
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false
        })
        dispatch(result);
      })
      .catch((error) => {
        dispatch({
          type: constants.SEARCH_DONE,
          loading: false
        })
      })
  }
}
export const clearSearch = () => (
  {
    type: constants.CLEAR_COURSE,
    loading: true,
    courses: [],
  }
)