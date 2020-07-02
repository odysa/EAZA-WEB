/*
 * @Author: Chengxu Bian 
 * @Date: 2020-07-02 17:49:54 
 * @Last Modified by:   Chengxu Bian 
 * @Last Modified time: 2020-07-02 17:49:54 
 */
import styled from "styled-components";
import { Collapse as _Collapse, Select as _Select } from "antd";

// customize style of Collapse from antd
export const Collapse = styled(_Collapse)`
  width: 100%;
  font-size: 18px;
  color: #7f7f7f;
  background: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  .ant-collapse-content .ant-collapse-content-box {
    padding: 0 8px 4px 16px;
    color: black;
  }

  .ant-collapse-item {
    :hover {
      box-shadow: 0 0 1.1rem rgba(0, 0, 0, 0.15);
    }
  }
  .ant-collapse .ant-collapse-item .ant-collapse-header {
    padding: 6px 8px;
  }
`;
export const Select = styled(_Select)`
  width: 200px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.17);
  :hover {
    box-shadow: 0 0 1.1rem rgba(0, 0, 0, 0.15);
  }
`;

export const ChartConent = styled.div`
  width: 43rem;
  @media screen and (max-width: 500px) {
    width: 30rem;
  }
`;
export const ChartStyle = styled.div`
  width: 100%;
  height: 45rem;
  @media screen and (max-width: 500px) {
    height: 20rem;
  }
`;
