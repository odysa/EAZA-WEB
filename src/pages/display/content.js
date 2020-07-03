/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:59:51
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 19:59:04
 */
import React, { Component } from "react";
import { Row, Col, Affix, Spin, Pagination, Empty } from "antd";
import { Layout } from "./style";
import MultiSearch from "./multiSearch";
import Course from "./course";
import ProfDisplay from "../../component/profDisplay";
import { connect } from "react-redux";
import { actionCreaters as displayActionCreaters } from "./store";
import { withRouter } from "react-router-dom";
import cookies from "react-cookies";
import { SyncOutlined } from "@ant-design/icons";
import { getBreadthList } from "../../lib";
const { Content } = Layout;

const EmptyDisplay = <Empty description="Nothing Found" />;
const loadingIcon = <SyncOutlined spin style={{ fontSize: 70 }} />;

class ContentBody extends Component {
  cookieProfs = cookies.load("prof");
  cookieBreadths = cookies.load("breadths");
  cookiePage = parseInt(cookies.load("page"));
  cookieQuery = cookies.load("query");

  componentDidMount() {
    const { handleSearch, isSearch } = this.props;
    //if user searched
    if (isSearch) return;
    //if nothing in redux than get query from cookie
    if (!this.cookieProfs && !this.cookieBreadths)
      handleSearch(
        this.cookieQuery,
        this.cookiePage,
        this.cookieBreadths,
        false
      );
    if (this.cookieProfs && !this.cookieBreadths)
      handleSearch(
        this.cookieProfs,
        this.cookiePage,
        this.cookieBreadths,
        true
      );
    if (!this.cookieProfs && this.cookieBreadths)
      handleSearch(
        this.cookieQuery,
        this.cookiePage,
        this.cookieBreadths,
        false
      );
  }

  render() {
    const {
      page,
      courses,
      handleSearch,
      loading,
      total,
      query,
      breadths,
      profs,
    } = this.props;

    return (
      <div style={{ marginBottom: "2.58rem" }}>
        <div style={{ height: "2rem" }}></div>
        <Layout style={{}}>
          <Content>
            <Row>
              <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={1} />
              <Col xs={1} sm={1} md={1} lg={4} xl={4} xxl={3}>
                <Affix offsetTop={100}>
                  <MultiSearch />
                </Affix>
              </Col>

              <Col
                xs={23}
                sm={23}
                md={23}
                lg={16}
                xl={16}
                xxl={16}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* whether display professors */}
                {profs && profs.size > 0 && <ProfDisplay profs={profs} />}
                {courses &&
                  courses.map((item, key) => {
                    return (
                      <Course
                        style={{ flexShrink: "0.8" }}
                        grade={item.get("grade")}
                        id={item.get("id")}
                        key={key}
                        abb={item.get("abb")}
                        number={item.get("number")}
                        name={item.get("name")}
                        tags={getBreadthList(item.get("breadths"))}
                      />
                    );
                  })}
                <div style={{ width: "100%", height: 50 }}></div>
                {/* Display pagination only when more than 2 pages */}
                {courses && !loading && courses.size > 0 && (
                  <Pagination
                    current={page}
                    hideOnSinglePage={true}
                    showSizeChanger={false}
                    total={total}
                    defaultPageSize={15}
                    onChange={(page, pageSize) =>
                      handleSearch(query, page, breadths)
                    }
                  />
                )}
                {loading && (
                  <Spin
                    indicator={loadingIcon}
                    spinning={loading}
                    delay={500}
                  />
                )}
                {/* if not loading or disiplaying profs and courses*/}
                {!loading &&
                  courses &&
                  profs &&
                  profs.size === 0 &&
                  courses.size === 0 &&
                  EmptyDisplay}
              </Col>
              <Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={4} />
            </Row>
          </Content>
          {/* display loading icon */}
          {loading && (
            <div style={{ height: "24.5rem", background: "white" }} />
          )}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.getIn(["display", "value"]),
    courses: state.getIn(["display", "courses"]),
    loading: state.getIn(["display", "loading"]),
    total: state.getIn(["display", "total"]),
    page: state.getIn(["display", "page"]),
    breadths: state.getIn(["display", "breadths"]),
    profs: state.getIn(["display", "profs"]),
    isSearch: state.getIn(["display", "didSearch"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch(value, page, breadths, isProf) {
      if (isProf) dispatch(displayActionCreaters.searchProfs(value));
      else if (!breadths || breadths.size === 0)
        dispatch(displayActionCreaters.searchCourse(value, page));
      else
        dispatch(displayActionCreaters.searchBreadths(value, page, breadths));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContentBody));
