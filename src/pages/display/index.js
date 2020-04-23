import React from "react";
import { Affix } from "antd";
import { Provider } from "react-redux";
import Head from "../../common/header/index";
import store from "../../store";
import ContentBody from './content';
import Footer from '../../common/footer'
import { CookiesProvider } from 'react-cookie';
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
)

export default Display;