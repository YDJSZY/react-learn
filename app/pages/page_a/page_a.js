/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
import DateRange from '../../components/dateRange';
import SelectComponent from '../../components/select';
import DataTable from '../../components/dataTable';
import EditModalForm from '../../components/editModal';
import { Form, Table, Input, Button,Breadcrumb,Badge,Dropdown,Menu,Icon } from 'antd';
import { model,action } from './model';
import {myInfo,constants} from '../../untils/commons'
import baseMethods from '../../untils/baseMethods'
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
        action.apply(this);
        this.baseUrl = "../../data.json";
        this.state = {
        }
        this.editModalConfig = {
            dataUrl:"../../data.json",
            model:model.fields,
            visible:false,
            title:"新增",
            modalType:"",
            saveFormCallBack:this.saveFormCallBack
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
        this.init()
    }

    init() {
        for(var prop in baseMethods) {
            if(typeof baseMethods[prop] !=='function') return;
            this.__proto__[prop] = baseMethods[prop].bind(this)
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

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
                                <DateRange dateRangeName="本月份" cacheParams={this.dataTableConfig.loadDataParams} onDateRangeChange={this.dateRangeChange}></DateRange>
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
                    <EditModalForm config={this.editModalConfig} wrappedComponentRef={(ref) => { this.$editModalForm = ref; }}></EditModalForm>
                </div>
    }
};