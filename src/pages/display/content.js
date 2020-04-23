import React, { Component } from "react";
import { Row, Col, Affix, Spin, Pagination, Empty, Collapse, Card } from 'antd';
import { Layout } from './style'
import MultiSearch, { } from './multiSearch';
import Course from './course';
import { connect } from 'react-redux';
import { actionCreaters } from './store'
import cookies from 'react-cookies'
import { SyncOutlined } from '@ant-design/icons'
const { Content } = Layout;
const { Panel } = Collapse;
const EmptyDisplay = <Empty description='Nothing Found' />
var done = true;
const loadingIcon = <SyncOutlined spin style={{ fontSize: 70 }} />
class ContentBody extends Component {

    render() {
        const { page, courses, handleSearch, loading, total, query, breadths, profs } = this.props
        //if nothing in redux than get query from cookie
        done && courses.size === 0 && handleSearch(cookies.load('query'), 1);
        return (
            <div style={{ marginBottom: '2.58rem' }}>
                <div style={{ height: '2rem' }}></div>
                <Layout style={{}}>
                    < Content>
                        <Row>
                            <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={1} />
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={3}>
                                <Affix offsetTop={100}>
                                    <MultiSearch />
                                </Affix>
                            </Col>

                            <Col xs={20} sm={20} md={20} lg={16} xl={16} xxl={16}
                                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}
                            >
                                <Collapse style={{ width: '50rem' }} accordion>
                                    {profs && profs.map((item, key) => {
                                        return (
                                            <Panel header={item.get('instructor')} key={key}>
                                                <Collapse accordion>
                                                    {
                                                        item.get("terms").map((terms, key) => {
                                                            return (
                                                                <Panel header={terms.get('term')}>
                                                                    <Collapse>
                                                                        {terms.get('courses').map((courseItem, key) => (
                                                                            <Panel showArrow={false} header={courseItem.get('abbreviation') + ' ' + courseItem.get('number')}>{courseItem.get('name')}</Panel>
                                                                        ))}
                                                                    </Collapse>
                                                                </Panel>
                                                            )
                                                        })
                                                    }
                                                </Collapse>
                                            </Panel>
                                        )

                                    })
                                    }
                                </Collapse>
                                {courses && courses.map((item, key) => {
                                    return (
                                        <Course
                                            grade={item.get('grade')}
                                            key={key} abb={item.get('abb')} number={item.get('number')} name={item.get('name')}
                                            tags={getBreadthList(item.get('breadths'))} />
                                    )
                                })}

                                <div style={{ width: '100%', height: 50 }}></div>
                                {
                                    courses && !loading && courses.size > 0 && <Pagination
                                        current={page}
                                        hideOnSinglePage={true}
                                        showSizeChanger={false}
                                        defaultCurrent={1}
                                        total={total}
                                        defaultPageSize={15}
                                        onChange={(page, pageSize) => (handleSearch(query, page, breadths))}
                                    />}
                                {loading && <Spin
                                    indicator={loadingIcon}
                                    spinning={loading}
                                    delay={500}
                                />}
                                {!loading && courses && profs && profs.size === 0 && courses.size === 0 && EmptyDisplay}
                            </Col>
                            <Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={4} />
                        </Row>
                    </Content>
                    {loading && <div style={{ height: '24.5rem', background: 'white' }} />}
                </Layout>
            </div >
        );
    }
}
const getBreadthList = (breadths) => {
    const type = {
        'P': 'Physical Sci',
        'B': 'Biological Sci',
        'S': 'Social Sci',
        'C': 'Com B',
        'A': 'Com A',
        'L': 'Literatures',
        'H': 'Humanities',
        'N': 'Natural Sci',
        "E": 'Ethnic Studies'
    }
    let result = []
    for (let i = 0; i < breadths.length; ++i) {
        if (breadths[i] != '/') result.push(type[breadths[i]])
    }
    return result;
}
const mapStateToProps = (state) => {
    return {
        query: state.getIn(["display", "value"]),
        courses: state.getIn(["display", "courses"]),
        loading: state.getIn(["display", "loading"]),
        total: state.getIn(["display", "total"]),
        page: state.getIn(["display", "page"]),
        breadths: state.getIn(["display", "breadths"]),
        profs: state.getIn(["display", "profs"])
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch(value, page, breadths) {
            done = false;
            console.log(breadths);
            if (!breadths || breadths.size == 0)
                dispatch(actionCreaters.searchCourse(value, page))
            else dispatch(actionCreaters.searchBreadths(value, page, breadths))
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);