/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:03:46
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 00:34:14
 */
import React from "react";
import { Provider } from "react-redux";
import Header from "../../common/header/index";
import HomeContent from "./content/index";
import store from "../../store";
import Footer from "../../common/footer";
/**
 * Home page
 */
var Home = () => (
  <Provider store={store}>
    <Header key={1} />
    <HomeContent key={2}></HomeContent>
    <Footer />
  </Provider>
);

export default Home;
