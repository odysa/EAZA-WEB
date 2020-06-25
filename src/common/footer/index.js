/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:08:56
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-06-25 11:24:16
 */
import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
/**
 * Footer for all pages
 */
var MyFooter = () => (
  <Footer
    style={{
      height: "3.6rem",
      width: "100%",
      background: "white",
      textAlign: "center",
      fontSize: "1rem",
    }}
  >
    EAZA ©2020 Made with ❤ for badgers
  </Footer>
);

export default MyFooter;
