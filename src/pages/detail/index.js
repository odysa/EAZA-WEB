/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:59:12
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-06-25 10:59:12
 */
import React from "react";
import { Provider } from "react-redux";
import { Affix } from "antd";
import Header from "../../common/header";
import Content from "./content";
import store from "../../store/index";
import Footer from "../../common/footer";
/**
 * Page to display course details
 */
var Detail = () => (
  <Provider store={store}>
    <Affix offsetTop={0}>
      <Header key={0} />
    </Affix>
    <Content />
    <Footer />
  </Provider>
);

export default Detail;
