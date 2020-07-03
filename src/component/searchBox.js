/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:06:04
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 17:20:38
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreaters } from "../common/header/store";
import {actionCreaters as displayActionCreaters} from '../pages/display/store'
import { SearchBox as Search } from "../common/header/style";
import HotList from "./hotList";

/**
 * A input box for searching
 * Perform search and update
 */
class SearchBox extends Component {
  render() {
    const {
      handleInputFocus,
      handleInputBlur,
      handleSearch,
      focused,
    } = this.props;
    return (
      <div>
        <Search
          placeholder="Search"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onSearch={(value) => {
            handleSearch(value, 1);
            this.props.history.push("/display");
          }}
        />
        {focused && this.props.toggled && <HotList />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.getIn(["header", "value"]),
    focused: state.getIn(["header", "focused"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch(value, page) {
      dispatch(actionCreaters.searchBlur());
      dispatch(displayActionCreaters.searchCourse(value, page));
    },
    handleInputFocus() {
      dispatch(actionCreaters.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreaters.searchBlur());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBox));
