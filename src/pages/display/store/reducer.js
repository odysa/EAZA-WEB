import * as constants from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
    value: '',
    courses: [],
    loading: false,
    profs: [],
    total: 0,
    page: 0,
    breadths: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
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
                loading: action.loading
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
