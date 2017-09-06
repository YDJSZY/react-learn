/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
import DateRange from '../../components/dateRange';
import SelectComponent from '../../components/select';
import { Form, Table, Input, Button,Breadcrumb } from 'antd';
import { model } from './model';
import axios from 'axios';
require("./style.css");
const FormItem = Form.Item;
const columns = model.fields;
const styles = {
    "demoSpan":{
        "color":"#ddd",
        "fontSize":"18px"
    }
}
export default class Page_a extends React.Component{
    static defaultProps = {
        selectSource:[{id:"1",name:"篮球"},{id:"2",name:"音乐"},{id:"3",name:"足球"}]
    }
    constructor(props){
        super(props)
        this.state = {
            serverData:[],
            paginationMes:{
                showSizeChanger:true,
                defaultCurrent:1,
                total:0,
                pageSize:20,
                onChange:(page,pageSize)=> {
                    this.gotoPage(page,pageSize)
                },
                onShowSizeChange:(page,pageSize)=> {
                    this.gotoPage(1,pageSize)
                },
            },
        }
        this.loadDataParams = {
            order:"",
            page:1,
            page_size:20,
            begin_time:"",
            end_time:""
        }
    }

    selectCallBack = (model,value)=> {
        this.loadDataParams[model] = value;
        this.loadFirstPage();
    }

    loadFirstPage = ()=> {
        this.fetchData()
    }

    async fetchData() {
        try{
            var res = await axios.get('../../data.json', {params:this.loadDataParams});
            if(res.status >=200 && res.status<=300){
                return this.parseResponse(res.data);
            }
        }catch(e) {
            console.debug(e);
        }
    }

    parseResponse(data) {
        var paginationMes = this.state.paginationMes;
        paginationMes.defaultCurrent = data.currentPage;
        paginationMes.total = data.total;
        paginationMes.pageSize = this.loadDataParams.page_size;
        paginationMes.current = this.loadDataParams.page;
        this.setState({
            serverData:data.results,
            paginationMes:paginationMes
        })
    }

    gotoPage(page,pageSize) {
        this.loadDataParams.page = page;
        this.loadDataParams.page_size = pageSize;
        this.loadFirstPage();
    }

    tableChange(pagination, filters, sorter) {
        this.sorterChange(sorter);
    }

    sorterChange(sorter) {/*排序改变*/
        var order = sorter.order;
        if(!order) return;
        var key = sorter.column.sortKey || sorter.columnKey;
        this.loadDataParams.order = order=="descend" ? "-"+key : key;
        this.fetchData()
    }

    dateRangeChange = (dateRange,noReq)=> {
        this.loadDataParams.begin_time = +new Date(dateRange.begin_time);
        this.loadDataParams.end_time = +new Date(dateRange.end_time);
        if(dateRange.dateRangeName == "自定义") return;
        if(noReq) return;
        this.loadFirstPage();
    }/*日期查询范围改变*/

    search = ()=> {
        this.loadFirstPage();
    }

    searchChange = (e)=> {
        this.loadDataParams.search = e.target.value;
    }

    inputEnter = (e)=> {
        if(e.keyCode === 13) {
            this.loadFirstPage();
        }
    }

    componentDidMount() {
        this.fetchData();
        console.log(this.loadDataParams)
    }

    render() {
        return  <div>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>page_a</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: '0 15px 15px 15px', background: '#fff'}}>
                        <Form layout="inline" className="filter-form">
                            <FormItem>
                                <DateRange dateRangeName="本月份" cacheParams={this.loadDataParams} onDateRangeChange={this.dateRangeChange}></DateRange>
                            </FormItem>
                            <FormItem>
                                <SelectComponent
                                    config={
                                    {
                                        mode:'',source:this.props.selectSource,
                                        onSelect:this.selectCallBack,model:'hobby',
                                        style:{width:"152px",marginTop:"2px"},placeholder:'爱好'
                                    }
                                    }>
                                </SelectComponent>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="搜索" size="default" onChange={this.searchChange} onKeyUp={this.inputEnter} />
                            </FormItem>
                            <FormItem>
                                <Button type="primary" size="default" onClick={this.search}>Search</Button>
                            </FormItem>
                            <FormItem>
                                <span style={styles.demoSpan}>test</span>
                            </FormItem>
                        </Form>
                        <Table
                            columns={columns} dataSource={this.state.serverData}
                            pagination={this.state.paginationMes} bordered={true}
                            scroll={{x:"100%"}} size="defaults" onChange={this.tableChange.bind(this)}
                        />
                    </div>
                </div>
    }
};