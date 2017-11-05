/**
 * Created by luwenwe on 2017/9/13.
 */
import React from "react";
import { getLocalStorage,setLocalStorage } from '../untils/global';
import baseConfig from '../config/baseConfig';
import { showLoading } from './commonMethods';
import TableAction from './tableAction';
const $localStorage = getLocalStorage();
export default class TableCrud extends React.Component{
    constructor(props) {
        super(props);
        this.alertOptions = {
            offset: 14,
            position: 'top right',
            theme: 'light',
            time: 5000,
            transition: 'scale'
        }
    }

    makeUrl = (url)=> {
        return baseConfig.apiPrefix+url;
    }
    
    alert(type,mes) {
        this.$alert.show(mes, {
            type: type
        })
    }

    selectChange = (val,prop)=> {
        var loadDataParams = this.state.loadDataParams;
        loadDataParams[prop] = val;
        this.setState({
            loadDataParams
        },()=>{
            this.$dataTable.loadFirstPage();
        })
    }/*select搜索*/

    search = ()=> {
        if(!this.$dataTable){
            console.debug("$dataTable is not exist");
            return;
        }
        this.$dataTable.loadFirstPage();
    }

    keyWordChange = (e)=> {
        var loadDataParams = this.state.loadDataParams;
        loadDataParams.search = e.target.value;
        this.setState({loadDataParams})
    }

    inputEnter = (e)=> {
        if(e.keyCode === 13) {
            this.search();
        }
    }/*enter搜索*/

    saveFormCallBack = (res,type)=> {
        console.log(res)
    }

    uploadFile(file,key) {
        console.log(file)
        console.log(key)
    }

    dateRangeChange = (dateRange,noReq)=> {
        var loadDataParams = this.state.loadDataParams;
        loadDataParams.begin_time = +new Date(dateRange.begin_time);
        loadDataParams.end_time = +new Date(dateRange.end_time);
        this.setState({loadDataParams});
        if(dateRange.dateRangeName == "自定义") return;
        if(noReq) return;
        this.search();
    }/*日期查询范围改变*/

    clearQueueAnimStyle = ()=> {
        $(".content").css({transform:"none"})
    }

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

    init() {
        if(this.$editModal) this.tableAction = new TableAction(this.$editModal);
    }

    componentWillMount() {
        showLoading();
        console.log(this.props)
        //this.routeMessage = this.props.match;/*当前页面的路由信息*/
       // this.cutPath(this.routeMessage.match.path)
    }

    componentWillUnmount() {
        //this.setLocalStorage();
    }

    componentDidMount() {
        this.init();
    }
}