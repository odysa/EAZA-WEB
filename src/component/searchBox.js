/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:06:04
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:55:14
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreaters } from "../pages/display/store";
import { actionCreaters as actionCreaters2 } from "../common/header/store";
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
      dispatch(actionCreaters2.searchBlur());
      dispatch(actionCreaters.searchCourse(value, page));
    },
    handleInputFocus() {
      dispatch(actionCreaters2.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreaters2.searchBlur());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBox));
