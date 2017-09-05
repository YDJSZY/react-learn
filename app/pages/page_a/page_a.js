/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
import DateRange from '../../components/dateRange';
import SelectComponent from '../../components/select';
import { Form, Table, Input, Button,Breadcrumb } from 'antd';
import { model } from './model';
import axios from 'axios';
const FormItem = Form.Item;
const columns = model.fields;
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
                pageSize:20
            },
            loadDataParams:{
                order:"",
                page:1
            }
        }
    }

    selectCallBack(value) {
        console.log(value)
    }

    async fetchData() {
        try{
            var res = await axios.get('../../data.json',
                {params:this.state.loadDataParams});
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
        paginationMes.pageSize = data.pageSize;
        paginationMes.total = data.total;
        this.setState({
            serverData:data.results,
            paginationMes:paginationMes
        })
    }

    gotoPage(page,pageSize) {
        console.log(page);
        console.log(pageSize);
    }

    tableChange(pagination, filters, sorter) {
        this.sorterChange(sorter);
    }

    sorterChange(sorter) {
        var loadDataParams = this.state.loadDataParams;
        var order = sorter.order;
        if(!order) return;
        var key = sorter.column.sortKey || sorter.columnKey;
        loadDataParams.order = order=="descend" ? "-"+key : key;
        this.setState({
            loadDataParams:loadDataParams
        },function () {
            this.fetchData()
        }.bind(this))
    }

    componentDidMount() {
        var paginationMes = this.state.paginationMes;
        paginationMes.onChange = this.gotoPage;/*翻页回调*/
        this.setState({
            paginationMes:paginationMes
        })
        this.fetchData();
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
                                <DateRange dateRangeName="本月份"></DateRange>
                            </FormItem>
                            <FormItem>
                                <SelectComponent
                                    config={
                                    {
                                        mode:'',source:this.props.selectSource,
                                        onSelect:this.selectCallBack.bind(this),
                                        style:{width:"152px",marginTop:"2px"}
                                    }
                                    }>
                                </SelectComponent>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="搜索" size="default" />
                            </FormItem>
                            <FormItem>
                                <Button type="primary" size="default">Search</Button>
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