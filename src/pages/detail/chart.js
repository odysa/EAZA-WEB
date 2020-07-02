/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 10:57:37
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:50:01
 */
import React, { Component } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/chart/pie";
import {ChartStyle} from './style';

//settting of chart
var setOption = (grades) => ({
  title: {
    text: grades.get("term"),
    x: "center",
    y: "top",
    fontSize: "5px",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  grid: {
    top: "4%",
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  roseType: "angle",
  series: [
    {
      name: "Grade",
      type: "pie",
      radius: "60%",
      center: ["50%", "50%"],
      data: [
        {
          name: "A",
          value: grades.get("A") === 0 ? null : grades.get("A"), //hide 0
        },
        {
          name: "AB",
          value: grades.get("AB") === 0 ? null : grades.get("AB"),
        },
        {
          name: "B",
          value: grades.get("B") === 0 ? null : grades.get("B"),
        },
        {
          name: "BC",
          value: grades.get("BC") === 0 ? null : grades.get("BC"),
        },
        {
          name: "C",
          value: grades.get("C") === 0 ? null : grades.get("C"),
        },
        {
          name: "D",
          value: grades.get("D") === 0 ? null : grades.get("D"),
        },
        {
          name: "others",
          value: grades.get("others") === 0 ? null : grades.get("others"),
        },
      ].sort((a, b) => {
        return b.value - a.value;
      }),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      itemStyle: {
        normal: {
          label: {
            show: true,
            formatter: "{b} : {c} ({d}%)",
          },
          labelLine: { show: true },
        },
      },
      //animation setting
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return idx * 80;
      },
    },
  ],
});

var myChart = null;
/**
 * Chart to display grade
 */
class Chart extends Component {
  componentDidMount() {
    //initialize a chart
    const { grades } = this.props;
    myChart = echarts.init(document.getElementById("chart"));
    myChart.setOption(setOption(grades));
  }
  componentDidUpdate() {
    // update chart
    const { grades } = this.props;
    if (grades) myChart.setOption(setOption(grades));
  }
  render = () => {
    return <ChartStyle id="chart" style={{ }} />;
  };
}

export default Chart;
