/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:02:11
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 19:38:31
 */
import React, { Component } from "react";
import { Card } from "./style";
import { Tag } from "antd";
import * as actionCreater from "../detail/store/actionCreater";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
/**
 * Card to display courses
 */
class Course extends Component {
  render() {
    const { abb, number, name, tags, grade, handleClick, id } = this.props;
    return (
      <Card
        bordered={false}
        key={number + abb}
        hoverable
        title={
          abb.length < 27
            ? abb + " " + number
            : abb.slice(0, 27) + "... " + number
        }
        extra={
          grade ? "A : " + ((grade * 100).toFixed(1).toString() + "%") : "None"
        }
        onClick={() => {
          handleClick(id);
          this.props.history.push("/detail");
        }}
      >
        {name}
        <br />
        {tags.map((x, key) => {
          return <Tag key={key}>{x}</Tag>;
        })}
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(id) {
      dispatch(actionCreater.searchBegin());
      dispatch(actionCreater.getCourse(id,'I send'));
    },
  };
};
export default connect(null, mapDispatchToProps)(withRouter(Course));
