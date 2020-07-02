/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-01 18:09:37
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:50:51
 */

import { MyList as List, ListItem } from "../common/header/style";
import React from "react";
const hotCourses = ["MUSIC 113", "CS 300", "ESL 118"];

const HotList = (props) => (
  <List
    header={<b>Hottest Courses</b>}
    bordered
    dataSource={hotCourses}
    renderItem={(item) => (
      <List.Item>
        <ListItem>{item}</ListItem>
      </List.Item>
    )}
  />
);

export default HotList;
