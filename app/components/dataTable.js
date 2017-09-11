/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import { Table,Badge,Dropdown,Menu,Icon } from 'antd';
import axios from 'axios';

export default class DataTable extends React.Component {
    static defaultProps = {
        
    }

    constructor(props) {
        super(props);
        props.config.pagination.onChange = (page,pageSize)=> {
            this.gotoPage(page,pageSize)
        }
        props.config.pagination.onShowSizeChange = (page,pageSize)=> {
            this.gotoPage(1,pageSize)
        }
        this.state = {
            serverData:[],
            pagination:props.config.pagination
        }
        this.loadDataParams = props.config.loadDataParams;
        this.requestUrl = props.config.requestUrl;

    }

    loadFirstPage = ()=> {
        this.fetchData()
    }

    async fetchData() {
        console.log(this.loadDataParams)
        var requestUrl = this.requestUrl
        try{
            var res = await axios.get(requestUrl, {params:this.loadDataParams});
            if(res.status >=200 && res.status<=300){
                return this.parseResponse(res.data);
            }
        }catch(e) {
            console.debug(e);
        }
    }

    parseResponse(data) {
        var pagination = this.state.pagination;
        pagination.defaultCurrent = data.currentPage;
        pagination.total = data.total;
        pagination.pageSize = this.loadDataParams.page_size;
        pagination.current = this.loadDataParams.page;
        this.setState({
            serverData:data.results,
            pagination:pagination
        })
    }

    gotoPage(page,pageSize) {
        this.loadDataParams.page = page;
        this.loadDataParams.page_size = pageSize;
        this.loadFirstPage();
    }

    tableChange = (pagination, filters, sorter)=>{
        this.sorterChange(sorter);
    }

    sorterChange(sorter) {/*排序改变*/
        var order = sorter.order;
        if(!order) return;
        var key = sorter.column.sortKey || sorter.columnKey;
        this.loadDataParams.order = order=="descend" ? "-"+key : key;
        this.fetchData()
    }

    componentDidMount() {
        this.loadFirstPage();
    }
    
    render() {
        return <Table
            columns={this.props.config.columns} dataSource={this.state.serverData}
            pagination={this.state.pagination} bordered={true}
            expandedRowRender={this.props.config.expandedRowRender || null}
            scroll={{x:"100%"}} size="defaults" onChange={this.tableChange}
        />
    }
}