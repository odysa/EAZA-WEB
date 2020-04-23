import { reducer as headerReducer } from "../common/header/store/index";
import { reducer as displayReducer } from '../pages/display/store'
import { combineReducers } from "redux-immutable";

const reducer = combineReducers({
  header: headerReducer,
  display: displayReducer
});

export default reducer;
