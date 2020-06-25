/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:13:02
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 11:13:02
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
