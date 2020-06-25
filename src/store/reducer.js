/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:13:06
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 11:13:06
 */
import { reducer as headerReducer } from "../common/header/store/index";
import { reducer as displayReducer } from "../pages/display/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { combineReducers } from "redux-immutable";

const reducer = combineReducers({
  header: headerReducer,
  display: displayReducer,
  detail: detailReducer,
});

export default reducer;
