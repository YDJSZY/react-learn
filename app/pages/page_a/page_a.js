/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
import DateRange from '../../components/dateRange';
import SelectComponent from '../../components/select';
import DataTable from '../../components/dataTable';
import EditModal from './editModal';
import { Form, Table, Input, Button,Breadcrumb,Badge,Dropdown,Menu,Icon } from 'antd';
import { model } from './model';
require("./style.css");
const FormItem = Form.Item;
const columns = model.fields;
const menu = (
    <Menu>
        <Menu.Item>
            Action 1
        </Menu.Item>
        <Menu.Item>
            Action 2
        </Menu.Item>
    </Menu>
);
const expandedRowRender = () => {
    const _columns = [
        {title: 'Date', dataIndex: 'date', key: 'date'},
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Status', key: 'state', render: () => <span><Badge status="success"/>Finished</span>},
        {title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum'},
        {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
                <span className={'table-operation'}>
                    <a href="#">Pause</a>
                    <a href="#">Stop</a>
                    <Dropdown overlay={menu}>
                        <a href="#">
                            More <Icon type="down"/>
                        </a>
                    </Dropdown>
                </span>
            ),
        },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i,
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
        });
    }
    return (
        <Table
            columns={_columns}
            dataSource={data}
            pagination={false}
        />
    );
}
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
        super(props);
        this.editConfig = {
            model:model.fields,
            visible:false
        }
        this.dataTableConfig = {
            expandedRowRender:expandedRowRender,
            requestUrl: "../../data.json",
            columns:columns,
            loadDataParams: {
                order:"",
                page:1,
                page_size:20,
                begin_time:"",
                end_time:""
            },
            pagination: {
                showSizeChanger:true,
                defaultCurrent:1,
                total:0,
                pageSize:20
            }
        }
    }

    selectCallBack = (model,value)=> {
        this.dataTableConfig.loadDataParams[model] = value;
        this.search();
    }

    dateRangeChange = (dateRange,noReq)=> {
        this.dataTableConfig.loadDataParams.begin_time = +new Date(dateRange.begin_time);
        this.dataTableConfig.loadDataParams.end_time = +new Date(dateRange.end_time);
        if(dateRange.dateRangeName == "自定义") return;
        if(noReq) return;
        this.search();
    }/*日期查询范围改变*/

    search = ()=> {
        if(!this.$dataTable){
            console.debug("$dataTable is not exist");
            return;
        }
        this.$dataTable.loadFirstPage();
    }

    searchChange = (e)=> {
        this.dataTableConfig.loadDataParams.search = e.target.value;
    }

    inputEnter = (e)=> {
        if(e.keyCode === 13) {
            this.search();
        }
    }/*enter搜索*/

    create = ()=> {
        this.$editModal.open()
    }

    componentDidMount() {
        console.log("parent")
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
                            <FormItem style={{"float":"right","marginRight":0}}>
                                <Button type="primary" size="default" onClick={this.create}>新增</Button>
                            </FormItem>
                        </Form>
                        <DataTable config={this.dataTableConfig} ref={(ref) => { this.$dataTable = ref; }}/>
                    </div>
                    <EditModal config={this.editConfig} ref={(ref) => { this.$editModal = ref; }}></EditModal>
                </div>
    }
};