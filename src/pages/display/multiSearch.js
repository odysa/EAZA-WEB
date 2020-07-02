/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:02:47
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:53:30
 */
import React from "react";
import { Layout } from "../display/style";
import SearchBoard from "../../component/searchBoard";
const { Sider } = Layout;
/**
 * search board with multiple options
 * @param {} props
 */
var MultiSearch = (props) => (
  <Layout>
    <Sider
      width={"12rem"}
      style={{ background: "#f0f2f5", zIndex: "3" }}
      theme="light"
      breakpoint="xxl"
      collapsedWidth="0"
    >
      <SearchBoard />
    </Sider>
  </Layout>
);

export default MultiSearch;
