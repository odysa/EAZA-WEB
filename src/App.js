/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:13:13
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-06-25 11:13:42
 */
import React from "react";
import { Provider } from "react-redux";
import Head from "./common/header/index";
import store from "./store/index";
import ContentBody from "./pages/display/content";
import "antd/dist/antd.css";
function App() {
  return (
    <Provider store={store}>
      <Head />
      <ContentBody />
    </Provider>
  );
}

export default App;
