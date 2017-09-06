/**
 * Created by luwenwei on 17/9/3.
 */
import React from "react";
import { DatePicker,Select } from 'antd';
const dateRangeSelect = require("../untils/dateRangeSelect");
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
    //static defaultProps = {
    //  name: 'Mary'  //定义defaultprops的另一种方式
    //}

    //static propTypes = {
    //name: React.PropTypes.string
    //}
    constructor(props) {
        super(props);
        this.state = {
            dateValue: [],
            disabledDateRange:true
        };
    }

    componentWillMount() {
        
    }

    componentDidMount(){
        this.dateRangeChange(this.props.dateRangeName,true);
    }

    dateRangeChange = (val,noReq)=> {/*日期范围改变*/
        var dateRange = dateRangeSelect(val);
        var arr = [moment(dateRange.begin_time,dateFormat),moment(dateRange.end_time,dateFormat)];
        this.emitDateRangeChange(dateRange,noReq);
        this.setState({
            dateValue:arr,
            disabledDateRange:dateRange.dateRangeName == "自定义" ? false : true
        })
    }

    emitDateRangeChange(dateRange,noReq) {
        this.props.onDateRangeChange(dateRange,noReq);/*触发父组件的日期选择回调*/
    }

    beginDateChange = (date)=> {
        var dateValue = this.state.dateValue;
        dateValue[0] = moment(date._d,dateFormat);
        this.setState({
            dateValue:dateValue,
        },()=>{
            this.props.cacheParams.begin_time = +new Date(dateValue[0]._d);
        })
    }

    endDateChange = (date)=> {
        var dateValue = this.state.dateValue;
        dateValue[1] = moment(date._d,dateFormat);
        this.setState({
            dateValue:dateValue,
        },()=>{
            this.props.cacheParams.end_time = +new Date(dateValue[1]._d);
        })
    }

    disabledBeginDate = (current)=> {/*开始日期不能大于结束日期*/
        return current && current.valueOf() > +new Date(this.state.dateValue[1]);
    }

    disabledEndDate = (current)=> {/*结束日期不能小于开始日期*/
        return current && current.valueOf() < +new Date(this.state.dateValue[0]);
    }

    render() {
        return  <div>
                    <Select defaultValue={this.props.dateRangeName} style={{ width: 120 }} onChange={this.dateRangeChange}>
                        {namedDateRanges.map(function(item,index){
                            return <Select.Option key={'_'+index} value={item}>{item}</Select.Option>
                        })}
                    </Select>
                    <DatePicker
                        value={this.state.dateValue[0]} onChange={this.beginDateChange}
                        disabled={this.state.disabledDateRange} disabledDate={this.disabledBeginDate}>
                    </DatePicker>
                    <DatePicker
                        value={this.state.dateValue[1]} onChange={this.endDateChange}
                        disabled={this.state.disabledDateRange} disabledDate={this.disabledEndDate}>
                    </DatePicker>
                </div>
    }
}