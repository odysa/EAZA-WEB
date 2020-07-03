/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-03 18:20:33
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-03 18:25:22
 */
import React from "react";
import { Collapse } from "../pages/detail/style";
const { Panel } = Collapse;
/**
 * Board to display professors's information
 * @param {*} props
 */
var ProfDisplay = (props) => (
  <Collapse style={{ width: "50rem" }} accordion>
    {props.profs.map((item, key) => (
      <Panel header={item.get("instructor")} key={key}>
        <Collapse expandIconPosition="right">
          {item.get("terms").map((terms, key2) => {
            return (
              <Panel header={terms.get("term")} key={key2 * 2}>
                <Collapse>
                  {terms.get("courses").map((courseItem, key3) => (
                    <Panel
                      key={key3 * 3}
                      showArrow={false}
                      header={`${courseItem.get(
                        "abbreviation"
                      )} ${courseItem.get("number")}`}
                    >
                      {courseItem.get("name")}
                    </Panel>
                  ))}
                </Collapse>
              </Panel>
            );
          })}
        </Collapse>
      </Panel>
    ))}
  </Collapse>
);

export default ProfDisplay;
