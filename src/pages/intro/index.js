/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:03:46
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-06-25 11:25:06
 */
import React from "react";
import { Affix } from "antd";
import { Provider } from "react-redux";
import Head from "../../common/header/index";
import HomeContent from "./content/index";
import store from "../../store";
import Footer from "../../common/footer";
import QueueAnim from "rc-queue-anim";
/**
 * Home page
 */
var Home = () => (
  <Provider store={store}>
    <QueueAnim delay={500}>
      <Affix offsetTop={0}>
        <Head key={1} />
      </Affix>
      <HomeContent key={2}></HomeContent>
    </QueueAnim>
    <Footer />
  </Provider>
);

export default Home;
