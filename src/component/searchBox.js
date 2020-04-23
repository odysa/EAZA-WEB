import React, { Component } from "react";
import { Input } from "antd";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { actionCreaters } from '../pages/display/store'
import { actionCreaters as actionCreaters2 } from '../common/header/store'
const { Search } = Input
class SearchBox extends Component {
  render() {
    const { handleInputFocus, handleInputBlur, handleSearch, focused } = this.props;
    return (
      <Search
        placeholder="Search"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onSearch={value => {
          handleSearch(value, 1)
          this.props.history.push('/display')
        }}
        size="large"
        className={focused ? "normal focused" : "normal"}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    value: state.getIn(["header", "value"]),
    focused: state.getIn(["header", "focused"])
  };
};
const mapDispatchToProps = (dispatch) => {
  return ({
    handleSearch(value, page) {
      //dispatch(actionCreaters.clearSearch())
      dispatch(actionCreaters.searchCourse(value, page))
    },
    handleInputFocus() {
      dispatch(actionCreaters2.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreaters2.searchBlur());
    },
  });
};
SearchBox = withRouter(SearchBox)
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
