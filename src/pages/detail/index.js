/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:59:12
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:50:15
 */
import React from "react";
import { Provider } from "react-redux";
import Header from "../../common/header";
import Content from "./content";
import store from "../../store/index";
import Footer from "../../common/footer";
/**
 * Page to display course details
 */
var Detail = () => (
  <Provider store={store}>
    <Header key={0} />
    <Content />
    <Footer />
  </Provider>
);

export default Detail;
