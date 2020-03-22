import React, { Component } from "react";
import { Input } from "antd";
import { connect } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
//const { Search } = Input;
class SearchBox extends Component {
  render() {
    const { handleInputFocus, handleInputBlur, focused } = this.props;
    return (
      <Input
        placeholder="Search"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        suffix={
          <SearchOutlined className={focused ? "icon focused" : "icon"} />
        }
        className={focused ? "normal focused" : "normal"}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"])
  };
};
export default connect(mapStateToProps, null)(SearchBox);
