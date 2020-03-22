import { reducer as headerReducer } from "../common/header/store/index";
import { combineReducers } from "redux-immutable";
const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
