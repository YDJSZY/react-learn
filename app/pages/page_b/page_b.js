/**
 * Created by Apple on 17/2/6.
 */
import React from "react";
//import { model,action } from '../page_a/model';
//import DateRange from '../../components/dateRange';
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
    }

    logChange = (val)=> {
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
                                    <div className="form-group">
                                        <Select
                                            style={{width:"170px"}}
                                            name="form-field-name"
                                            value="one"
                                            options={this.options}
                                            onChange={this.logChange}
                                        />
                                    </div>

                                    <div className="form-group">

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