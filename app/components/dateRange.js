/**
 * Created by luwenwei on 17/9/3.
 */
import React from "react";
import { DatePicker,Select } from 'antd';
const DateRangeSelect = require("../untils/dateRangeSelect");
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const namedDateRanges = [
    "今天",
    "昨天",
    "前天",
    "本周",
    "上周",
    "本月份",
    "上个月",
    "最近三个月",
    "上个季度",
    "最近一年",
    "本季度",
    "本年度",
    "上一年度",
    "不限",
    "自定义"
];
const dateFormat = 'YYYY-MM-DD';
export default class DateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateValue: [],
            disabledDateRange:true
        };
    }

    //static defaultProps = {
    //  name: 'Mary'  //定义defaultprops的另一种方式
    //}

    //static propTypes = {
    //name: React.PropTypes.string
    //}

    componentWillMount() {
        this.dateRangeChange(this.props.dateRangeName);
    }

    componentDidMount(){

    }

    dateRangeChange(val) {
        var dateRange = DateRangeSelect(val);
        var arr = [moment(dateRange.begin_time,dateFormat),moment(dateRange.end_time,dateFormat)]
        this.setState({
            dateValue:arr,
            disabledDateRange:dateRange.dateRangeName == "自定义" ? false : true
        })
    }

    beginDateChange(date) {
        var dateValue = this.state.dateValue;
        dateValue[0] = moment(date._d,dateFormat);
        this.setState({
            dateValue:dateValue,
        })
    }

    endDateChange(date) {
        var dateValue = this.state.dateValue;
        dateValue[1] = moment(date._d,dateFormat);
        this.setState({
            dateValue:dateValue,
        })
    }

    render() {
        return  <div>
                    <Select defaultValue={this.props.dateRangeName} style={{ width: 120 }} onChange={this.dateRangeChange.bind(this)}>
                        {namedDateRanges.map(function(item,index){
                            return <Select.Option key={'_'+index} value={item}>{item}</Select.Option>
                        })}
                    </Select>
                    <DatePicker value={this.state.dateValue[0]} onChange={this.beginDateChange.bind(this)} disabled={this.state.disabledDateRange}></DatePicker>
                    <DatePicker value={this.state.dateValue[1]} onChange={this.endDateChange.bind(this)} disabled={this.state.disabledDateRange}></DatePicker>
                </div>
    }
}