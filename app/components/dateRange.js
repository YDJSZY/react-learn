/**
 * Created by luwenwei on 17/9/3.
 */
import React from "react";
import { DatePicker } from 'antd';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
const dateRangeSelect = require("../untils/dateRangeSelect");
require("../styles/resetAntd.css")
moment.locale('zh-cn');
const namedDateRanges = [
    {value:"今天",label:"今天"},
    {value:"昨天",label:"昨天"},
    {value:"前天",label:"前天"},
    {value:"本周",label:"本周"},
    {value:"上周",label:"上周"},
    {value:"本月份",label:"本月份"},
    {value:"上个月",label:"上个月"},
    {value:"最近三个月",label:"最近三个月"},
    {value:"上个季度",label:"上个季度"},
    {value:"最近一年",label:"最近一年"},
    {value:"本季度",label:"本季度"},
    {value:"本年度",label:"本年度"},
    {value:"上一年度",label:"上一年度"},
    {value:"不限",label:"不限"},
    {value:"自定义",label:"自定义"}
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
            disabledDateRange:true,
            selectDateRangeName:this.props.dateRangeName || "今天"
        };
    }

    componentWillMount() {

    }

    componentDidMount(){
        this.dateRangeChange(this.props.dateRangeName,true);
    }

    dateRangeChange = (val,noReq)=> {/*日期范围改变*/
        var dateRangeName = val.value || val;
        var dateRange = dateRangeSelect(dateRangeName);
        var arr = [moment(dateRange.begin_time,dateFormat),moment(dateRange.end_time,dateFormat)];
        this.emitDateRangeChange(dateRange,noReq);
        this.setState({
            selectDateRangeName:dateRangeName,
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
            console.log(this.props)
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
        return  <div style={{display:"inline-block"}}>
            <div className="form-group">
                <Select
                    clearable={false}
                    style={{width:"110px"}}
                    name="form-field-name"
                    value={this.state.selectDateRangeName}
                    options={namedDateRanges}
                    onChange={this.dateRangeChange}>
                </Select>
            </div>
            <div className="form-group">
                <DatePicker
                    value={this.state.dateValue[0]} onChange={this.beginDateChange}
                    disabled={this.state.disabledDateRange} disabledDate={this.disabledBeginDate}>
                </DatePicker>
                <DatePicker
                    value={this.state.dateValue[1]} onChange={this.endDateChange}
                    disabled={this.state.disabledDateRange} disabledDate={this.disabledEndDate}>
                </DatePicker>
            </div>
        </div>
    }
}