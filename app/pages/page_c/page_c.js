/**
 * Created by luwenwei on 17/10/21.
 */
import React, { Component } from 'react';
import DateRange from '../../components/dateRange';
import Highcharts from 'highcharts/highstock';

export default class Page_c extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        Highcharts.chart('highChartContainer',{
            chart: {
                type: 'spline'
            },
            title: {
                text: '两地月平均温度'
            },
            subtitle: {
                text: '数据来源: WorldClimate.com'
            },
            xAxis: {
                categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                    '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
                title: {
                    text: '温度'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: '东京',
                marker: {
                    symbol: 'square'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                    y: 26.5,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/demo/gfx/sun.png)'
                    }
                }, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: '伦敦',
                marker: {
                    symbol: 'diamond'
                },
                data: [{
                    y: 3.9,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/demo/gfx/snow.png)'
                    }
                }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    }

    render() {
        return <section className="content">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title-text">
                        <span className="parent-menu-title">首页</span>
                        <span className="separator">/</span>
                        <span className="children-menu-title">highchart</span>
                    </h5>
                </div>
                <div className="panel-body" style={{paddingTop: 0}}>
                    <div className="row" style={{marginBottom: "15px"}}>
                        <form className="form-inline filter-form" style={{margin:0}}>
                            
                        </form>
                    </div>
                    <div id="highChartContainer"></div>
                </div>
            </div>
        </section>
    }
}