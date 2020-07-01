/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:02:42
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 00:36:13
 */
import React from "react";
import { Provider } from "react-redux";
import Head from "../../common/header/index";
import store from "../../store";
import ContentBody from "./content";
import Footer from "../../common/footer";
import { Affix } from "antd";
var Display = () => (
  <Provider store={store}>
    <Head key={1} />
    <ContentBody />
    <Affix offsetBottom={0}>
      <Footer />
    </Affix>
  </Provider>
);

export default Display;
