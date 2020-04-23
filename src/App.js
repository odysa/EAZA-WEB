import React from "react";
import { Affix } from "antd";
import { Provider } from "react-redux";
import Head from "./common/header/index";
import HomeContent from "./common/content/index";
import store from "./store/index";
import QueueAnim from "rc-queue-anim";
import ContentBody from './pages/display/content'
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
