/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:57:25
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 19:41:15
 */
import React, { Component } from "react";
import { Row, Col, Empty, Descriptions, Skeleton } from "antd";
import { Collapse, ChartConent } from "./style";
import Chart from "./chart";
import { connect } from "react-redux";
import cookies from "react-cookies";
import TermSelect from "./courseSelect";
import ProfSelect from "./profSelect";
import * as actionCreater from "./store/actionCreater";
import { getBreadthList, getLevel } from "../../lib";

const { Panel } = Collapse;

class Content extends Component {
  componentDidMount() {
    const { abb, refreshData, isSearch } = this.props;
    if (!isSearch && !abb && cookies.load("id"))
      refreshData(cookies.load("id"));
  }

  render = () => {
    const {
      abb,
      number,
      name,
      description,
      requisite,
      level,
      college,
      currentGrades,
      lastTaught,
      breadth,
      offered,
    } = this.props;
    return (
      <div>
        <div style={{ height: "2rem" }} />
        <Row>
          <Col xxl={2} />
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={20}
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <div style={{ width: "43rem" }}>
              <Skeleton active loading={abb === ""}>
                <Collapse
                  style={{ width: "100%" }}
                  bordered={false}
                  expandIconPosition="right"
                  defaultActiveKey={["1", "2", "3", "4"]}
                >
                  <Panel header="Title" key="1">
                    {abb.length < 60
                      ? abb + " " + number
                      : abb.slice(0, 60) + "... " + number}
                  </Panel>
                  <Panel header="Name" key="2">
                    {name}
                  </Panel>
                  <Panel header="Description" key="3">
                    {description}
                  </Panel>
                  <Panel header="Breadths" key="4">
                    {getBreadthList(breadth).join("; ")}
                  </Panel>
                  <Panel header="Requirement" key="5">
                    {requisite}
                  </Panel>
                  <Panel header="College" key="6">
                    {college}
                  </Panel>
                  <Panel header="Others" key="7">
                    <Descriptions>
                      <Descriptions.Item label="Level">
                        {getLevel(level)}
                      </Descriptions.Item>
                      <Descriptions.Item label="Last Taught">
                        {lastTaught}
                      </Descriptions.Item>
                      <Descriptions.Item label="Usually Offered">
                        {offered}
                      </Descriptions.Item>
                    </Descriptions>
                  </Panel>
                </Collapse>
              </Skeleton>
            </div>

            <ChartConent>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <ProfSelect />
                <TermSelect />
              </div>
              {currentGrades && currentGrades.get("total") > 0 && (
                <Chart grades={currentGrades} />
              )}
              {(!currentGrades || currentGrades.get("total") <= 0) && <Empty />}
            </ChartConent>
          </Col>
          <Col xxl={2} />
        </Row>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    grades: state.getIn(["detail", "grades"]),
    abb: state.getIn(["detail", "abb"]),
    number: state.getIn(["detail", "number"]),
    description: state.getIn(["detail", "description"]),
    credit: state.getIn(["detail", "credit"]),
    college: state.getIn(["detail", "college"]),
    breadth: state.getIn(["detail", "breadth"]),
    lastTaught: state.getIn(["detail", "lastTaught"]),
    level: state.getIn(["detail", "level"]),
    offered: state.getIn(["detail", "offered"]),
    requisite: state.getIn(["detail", "requisite"]),
    repeatable: state.getIn(["detail", "repeatable"]),
    currentGrades: state.getIn(["detail", "currentGrades"]),
    name: state.getIn(["detail", "name"]),
    isSearch: state.getIn(["detail", "isSearch"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    refreshData(id) {
      dispatch(actionCreater.getCourse(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
