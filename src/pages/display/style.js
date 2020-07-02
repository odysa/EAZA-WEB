/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-02 17:53:37
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:54:00
 */
import styled from "styled-components";
import { Layout as _Layout, Card as _Card } from "antd";
/**
 * Customise antd Layout
 */
export const Layout = styled(_Layout)`
  .ant-layout {
    background: white;
  }
  .ant-layout-sider-children {
    background: white;
  }
  .ant-row {
    background: white;
  }
`;
/**
 * Customise antd card to display courses
 */
export const Card = styled(_Card)`
  width: 33rem;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 1.2rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2), 0 0 0.2rem rgba(0, 0, 0, 0.2);
  :hover {
    bottom: 0.6%;
  }
  .ant-card-body {
    padding: 12px 24px 12px 24px;
  }
`;
