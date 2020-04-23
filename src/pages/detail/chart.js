import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/pie';
const option = {
    title: {
        text: 'Fall 2019',
        x: 'center',
        y: 'top',
        fontSize: '5px'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    grid: {
        top: '4%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    roseType: 'angle',
    series: [
        {
            name: 'Grade',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [{
                "name": 'A',
                "value": 10
            },
            {
                "name": 'AB',
                "value": 18
            },
            {
                "name": 'B',
                "value": 15
            },
            {
                "name": 'BC',
                "value": 14
            },
            {
                "name": 'C',
                "value": 13
            },
            {
                "name": 'D',
                "value": 7
            }].sort((a, b) => { return b.value - a.value; }),
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b} : {c} ({d}%)'
                    },
                    labelLine: { show: true }
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return idx * 80;
            }
        },
    ],
};

class Chart extends Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption(option);
    }
    render = () => (
        <div id='chart' style={{ width: '400px', height: '300px' }}></div>
    )
}

export default Chart;