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

    selectChange = (val,prop)=> {
        console.log(val)
        var $type = Object.prototype.toString.call(val)
        var selectVal;
        var loadDataParams = this.state.loadDataParams;
        if($type === "[object Array]"){
            var arr = [];
            for(var v of val){
                arr.push(v.value);
            }
            selectVal = arr;
        }else{
            selectVal = val ? val.value : null;
        }
        loadDataParams[prop] = selectVal;
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

    beforeCreate =()=> {
        return {};
    }

    create = ()=> {
        var obj = this.beforeCreate();
        this.$editModal.open(obj,"create");
    }

    beforeEdit =(record)=> {
        return record;
    }

    edit = (record)=> {
        var record = this.beforeEdit(record)
        this.$editModal.open(record,"edit");
    }

    beforeSaveForm = (record)=> {
        return record;
    }

    saveFormCallBack = (res,type)=> {
        console.log(res)
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