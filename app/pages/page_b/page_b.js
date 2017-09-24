/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
//import { model,action } from '../page_a/model';
import DateRange from '../../components/dateRange';
//import SelectComponent from '../../components/select';
import axios from 'axios';
import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
import CommonMethodsClass from '../../untils/commonMethods';
export default class Page_b extends CommonMethodsClass{
    constructor(props) {
        super(props);
        this.options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];
        this.state = {
            mySelect:null
        }
        this.dataTableConfig = {
            requestUrl: "../data.json",
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
                showSizeChanger: true,
                defaultCurrent: 1,
                total: 0,
                pageSize: 20
            }
        }
    }

    logChange = (val)=> {
        var selectVal = val ? val.value : null;
        this.setState({
            mySelect:selectVal
        })
        //this.mySelect = val.value;
        console.log("Selected: " + JSON.stringify(val));
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
                                            style={{width:"170px"}}
                                            name="form-field-name"
                                            value={this.state.mySelect}
                                            options={this.options}
                                            onChange={this.logChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="table-responsive">

                            </div>
                        </div>
                        <div className="panel-footer">
                            <div className="pull-left">
                                <span></span>
                            </div>
                            <div className="pull-right">
                            </div>
                            <div style={{clear: "both"}}></div>
                        </div>
                    </div>
                </section>
        
    }
};