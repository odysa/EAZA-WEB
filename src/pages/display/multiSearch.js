import React from "react";
import { Layout } from '../display/style'
import { Row, Col } from 'antd'
import SearchBoard from '../../component/searchBoard'
const { Sider } = Layout
var MultiSearch = (props) => (
    <Layout>
        <Sider
            width={250}
            style={{ background: '#f0f2f5', zIndex: '3' }}
            theme='light'
            breakpoint='xl'
            collapsedWidth='0'
        >
            <SearchBoard />
        </Sider>
    </Layout >
)

export default MultiSearch;
/*
Biological Sciences
Humanities
Literature
Natural Sciences
Physical Sciences
Social Sciences

Search for Courses
Term
Fall 2020
Subject
All
Keyword, instructor, number
Seats
Open Wait listed Closed
Communication A
Communication B
Quantitative Reasoning A
Quantitative Reasoning B
Ethnic Studies
*/