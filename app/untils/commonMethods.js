/**
 * Created by luwenwe on 2017/9/13.
 */
import React from "react";
export default class CommonMethodsClass extends React.Component{
    constructor(props) {
        super(props);
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

    beforeCreate =()=> {
        return {};
    }

    create = ()=> {
        var obj = this.beforeCreate();
        this.$editModalForm.create(obj);
    }

    edit = (record)=> {
        this.$editModalForm.edit(record);
    }

    saveFormCallBack = (res,type)=> {
        console.log(res)
    }

    dateRangeChange = (dateRange,noReq)=> {
        this.dataTableConfig.loadDataParams.begin_time = +new Date(dateRange.begin_time);
        this.dataTableConfig.loadDataParams.end_time = +new Date(dateRange.end_time);
        if(dateRange.dateRangeName == "自定义") return;
        if(noReq) return;
        this.search();
    }/*日期查询范围改变*/
}