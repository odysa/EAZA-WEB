import React, { Component } from "react";
import { Row, Col, Card } from 'antd';
const { Meta } = Card
class Content extends Component {
    render = () => (
        <div>
            <div style={{ height: '2rem' }}></div>
            <Row>
                <Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={4} />
                <Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={20}>
                    <Card title='Math 234'>
                        <Meta title='Calculus--Functions of Several Variables'></Meta>
                        <Meta title='Introduction to calculus of functions of several variables; calculus on parameterized curves, derivatives of functions of several variables, multiple integrals, vector calculus. Enroll Info: None'></Meta>
                        <Meta title='MATH 222 or 276'></Meta>
                        <Meta title='Calculus--Functions of Several Variables'></Meta>
                    </Card>
                </Col>
                <Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={4} />
            </Row>
        </div>
    )
}