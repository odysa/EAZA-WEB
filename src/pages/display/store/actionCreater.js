import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import axios from 'axios';
import cookies from 'react-cookies';

export const searchCourse = (value, page) => {
    cookies.save('query', value, { path: '/' });
    return (dispatch) => {
        dispatch({
            type: constants.CLEAR_COURSE,
            loading: true,
            courses: fromJS([]),
        })
        axios.get('http://localhost:5000/v1/search?query=' + value + '&page=' + page)
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
export const searchBreadths = (value, page, breadths) => {
    breadths = breadths.join('1')
    if (value === '') value = 'all'
    return (dispatch) => {
        dispatch({
            type: constants.CLEAR_COURSE,
            loading: true,
            courses: fromJS([]),
        })
        axios.get('http://localhost:5000/v1/search/breadth?query=' + value + '&breadths=' + breadths + '&page=' + page)
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
export const searchProfs = (name) => {
    return (dispatch) => {
        dispatch({
            type: constants.CLEAR_COURSE,
            loading: true,
            profs: fromJS([]),
            courses: fromJS([]),
        })
        axios.get('http://localhost:5000/v1/get/prof?name=' + name)
            .then(response => {
                let responseData = response.data.data;
                const result = {
                    type: constants.SEARCH_PROF,
                    profs: fromJS(responseData),
                    value: fromJS(name)
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
export const changeBreadth = (breadths) => ({
    type: constants.CHANGE_BREADTH,
    breadths: fromJS(breadths)
})
export const clearSearch = () => (
    {
        type: constants.CLEAR_COURSE,
        loading: true,
        courses: [],
    }
)