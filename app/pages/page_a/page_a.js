/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
import { model } from '../page_a/model';
import DateRange from '../../components/dateRange';
import DataTable from '../../components/dataTable';
import Pagination from '../../components/pagination';
import EditModal from '../../components/editModal';
import SelectComponent from '../../components/select';
import axios from 'axios';
import TableCrud from '../../untils/tableCrud';
export default class Page_a extends TableCrud{
    constructor(props) {
        super(props);
        this.options = [
            { id: '1', name: 'One' },
            { id: '2', name: 'Two' },
            { id: '3', name: 'Three' },
            { id: '4', name: 'Four' }
        ];
        this.state = {
            loadDataParams: {
                hobby:"1",
                dateRangeName:"昨天",
                ordering: "-id",
                page: 1,
                page_size: 20,
                begin_time: "",
                end_time: ""
            }
        }
        this.dataTableModel = model.getFields(this);
        this.editModalConfig = {
            model:this.dataTableModel,
            requestUrl: "../data.json",
            beforeSaveForm:this.beforeSaveForm,
            Sex:[{ id: '1', name: '男' },{ id: '2', name: '女' }]
        }
        this.dataTableConfig = {
            requestUrl: "../data.json",
            dataTableModel:this.dataTableModel,
            expandedRow:this.expandedRow,
            getExpandedRow:this.getExpandedRow,
            pagination: {
                currentPage: 1,
                totalRecords: 20,
                totalPages:10,
                pageSize: 20
            }
        }
    }

    beforeSaveForm = (record)=> {
        record.age = record.age+10;
        return record
    }

    expandedRow(record) {
        var promise = axios.get("../data.json");
        return promise;

    }

    getExpandedRow(data) {
        var expandedRowData = data;
        return <tr>
            <td colSpan="30">
                <div className="expanded-row-main">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>小名</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{expandedRowData.id}</td>
                                <td>{"$"+expandedRowData.username}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination paginationMessage={expandedRowData.$expandedRowData}></Pagination>
                </div>
            </td>
        </tr>
    }

    render () {
        return  <section className="content">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title-text">
                        <span className="parent-menu-title">首页</span>
                        <span className="separator">/</span>
                        <span className="children-menu-title">page_a</span>
                    </h5>
                </div>
                <div className="panel-body" style={{paddingTop: 0}}>
                    <div className="row" style={{marginBottom: "15px"}}>
                        <form className="form-inline filter-form" style={{margin:0}}>
                            <DateRange dateRangeName={this.state.loadDataParams.dateRangeName} cacheParams={this.state.loadDataParams}
                                       onDateRangeChange={this.dateRangeChange}></DateRange>
                            <div className="form-group">
                                <input className="form-control" onChange={this.keyWordChange} id="quickSearch" placeholder="搜索"/>
                            </div>
                            <div className="form-group">
                                <SelectComponent model="hobby" value={this.state.loadDataParams.hobby} style={{width:"170px"}} onSelect={this.selectChange} source={this.options}></SelectComponent>
                            </div>
                            <div className="form-group">
                                <a className="btn btn-default" onClick={this.search}>
                                    <i className="fa fa-search"></i>
                                </a>
                            </div>
                            <div className="form-group pull-right">
                                <a className="btn btn-success" onClick={()=>{this.tableAction.create()}}>新增</a>
                            </div>
                        </form>
                    </div>
                    <DataTable config={this.dataTableConfig} loadDataParams={this.state.loadDataParams} ref={(ref) => { this.$dataTable = ref; }}/>
                    <EditModal config={this.editModalConfig} ref={(ref) => { this.$editModal = ref; }}></EditModal>
                </div>
            </div>
        </section>

    }
};