/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
import { model } from '../page_a/model';
import DateRange from '../../components/dateRange';
import DataTable from '../../components/dataTable';
import Pagination from '../../components/pagination';
import EditModal from '../../components/editModal';
import axios from 'axios';
import Select from 'react-select';
import CommonMethodsClass from '../../untils/commonMethods';
export default class Page_b extends CommonMethodsClass{
    constructor(props) {
        super(props);
        this.options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' },
            { value: 'four', label: 'Four' }
        ];
        this.state = {
            mySelect:null
        }
        this.dataTableModel = model.getFields(this);
        this.editModalConfig = {
            model:this.dataTableModel,
            requestUrl: "../data.json",
            beforeSaveForm:this.beforeSaveForm,
            Sex:[{ value: '1', label: '男' },{ value: '2', label: '女' }]
        }
        this.dataTableConfig = {
            requestUrl: "../data.json",
            dataTableModel:this.dataTableModel,
            expandedRow:this.expandedRow,
            getExpandedRow:this.getExpandedRow,
            loadDataParams: {
                hobby:"2",
                dateRangeName:"昨天",
                order: "",
                page: 1,
                page_size: 20,
                begin_time: "",
                end_time: ""
            },
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

    logChange = (val)=> {
        //var selectVal = val ? val.value : null;
        this.setState({
            mySelect:val
        })
        //this.mySelect = val.value;
        console.log("Selected: " + JSON.stringify(val));
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
                                <span className="children-menu-title">page_b</span>
                            </h5>
                        </div>
                        <div className="panel-body" style={{paddingTop: 0}}>
                            <div className="row" style={{marginBottom: "15px"}}>
                                <form className="form-inline filter-form" style={{margin:0}}>
                                    <DateRange dateRangeName={this.dataTableConfig.loadDataParams.dateRangeName} cacheParams={this.dataTableConfig.loadDataParams}
                                               onDateRangeChange={this.dateRangeChange}></DateRange>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="搜索"/>
                                    </div>
                                    <div className="form-group">
                                        <Select
                                            multi={true}
                                            style={{width:"170px"}}
                                            name="form-field-name"
                                            value={this.state.mySelect}
                                            options={this.options}
                                            onChange={this.logChange}
                                        />
                                    </div>
                                    <div className="form-group pull-right">
                                        <a className="btn btn-success" onClick={this.create}>新增</a>
                                    </div>
                                </form>
                            </div>
                            <DataTable config={this.dataTableConfig} ref={(ref) => { this.$dataTable = ref; }}/>
                            <EditModal config={this.editModalConfig} ref={(ref) => { this.$editModal = ref; }}></EditModal>
                        </div>
                    </div>
                </section>
        
    }
};