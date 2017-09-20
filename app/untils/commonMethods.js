/**
 * Created by luwenwe on 2017/9/13.
 */
import React from "react";
import { getLocalStorage,setLocalStorage } from '../untils/global';
const $localStorage = getLocalStorage();
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

    beforeEdit =(record)=> {
        return record;
    }

    edit = (record)=> {
        var record = this.beforeEdit(record)
        this.$editModalForm.edit(record);
    }

    saveFormCallBack = (res,type)=> {
        console.log(res)
    }

    dateRangeChange = (dateRange,noReq)=> {
        this.dataTableConfig.loadDataParams.dateRangeName = dateRange.dateRangeName;
        this.dataTableConfig.loadDataParams.begin_time = +new Date(dateRange.begin_time);
        this.dataTableConfig.loadDataParams.end_time = +new Date(dateRange.end_time);
        if(dateRange.dateRangeName == "自定义") return;
        if(noReq) return;
        this.search();
    }/*日期查询范围改变*/

    cutPath(path) {/*切割路由*/
        this.currentRoute = path.split("/")[1];
        this.setLocalStorage();
        //this.getStorageByCurrentRoute(this.currentRoute);
    }

    getStorageByCurrentRoute(currentRoute) {
        this.currentRouteStorage = $localStorage[currentRoute] ? $localStorage[currentRoute] : ($localStorage[currentRoute] = {});
        this.setSomeParams();
    }/*获取当前路由下的一些参数*/

    setSomeParams() {
        if(this.currentRouteStorage.loadDataParams){
            this.dataTableConfig.loadDataParams = this.currentRouteStorage.loadDataParams
        } else{
            this.currentRouteStorage.loadDataParams = this.dataTableConfig.loadDataParams;
        }/*从localstorage获取当前页面的一些请求参数*/
    }

    setLocalStorage() {
        $localStorage.route = this.currentRoute;
        setLocalStorage($localStorage);
    }

    componentWillMount() {
        this.cutPath(this.props.match.match.path)
    }

    componentWillUnmount() {
        this.setLocalStorage();
    }
}