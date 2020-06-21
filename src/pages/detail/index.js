import React from 'react';
import { Provider } from 'react-redux';
import { Affix } from 'antd';
import Header from '../../common/header';
import Content from './content';
import store from '../../store/index';
import Footer from '../../common/footer';
var Detail = () => (
    <Provider store={store}>
        <Affix offsetTop={0}>
            <Header key={0} />
        </Affix>
        <Content />
        <Footer />
    </Provider>
)

export default Detail;