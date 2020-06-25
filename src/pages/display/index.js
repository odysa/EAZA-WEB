/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:02:42
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 11:02:42
 */
import React from "react";
import { Affix } from "antd";
import { Provider } from "react-redux";
import Head from "../../common/header/index";
import store from "../../store";
import ContentBody from "./content";
import Footer from "../../common/footer";
var Display = () => (
  <Provider store={store}>
    <Affix offsetTop={0}>
      <Head key={1} />
    </Affix>
    <ContentBody />
    <Affix offsetBottom={0}>
      <Footer />
    </Affix>
  </Provider>
);

export default Display;
