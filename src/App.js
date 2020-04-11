import React from "react";
import { Affix } from "antd";
import { Provider } from "react-redux";
import Head from "./common/header/index";
import HomeContent from "./common/content/index";
import store from "./store/index";
import QueueAnim from "rc-queue-anim";
import "antd/dist/antd.css";
function App() {
  return (
    <div>
      <Provider store={store}>
        <QueueAnim delay={500}>
          <Affix offsetTop={0}>
            <Head key={1} />
          </Affix>
          <HomeContent key={2}></HomeContent>
        </QueueAnim>
        <div style={{ height: 500 }}></div>
      </Provider>
    </div>
  );
}

export default App;
