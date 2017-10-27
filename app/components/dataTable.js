/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import axios from 'axios';
import Pagination from './pagination';
import baseConfig from '../config/baseConfig';
import QueueAnim from 'rc-queue-anim';
import DragTableTh from './dragTableTh/dragTableTh';
const apiPrefix = baseConfig.apiPrefix;

export default class DataTable extends React.Component {
    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            serverData:[],
            pagination:props.config.pagination || { currentPage: 1,totalRecords:null, totalPages:1,pageSize: 20},
            dataTableModel:props.config.dataTableModel,
            switchTdCache:{}
        }
        this.loadDataParams = props.loadDataParams;
        this.requestUrl = props.config.requestUrl;

    }

    loadFirstPage = ()=> {
        this.loadDataParams.page = 1;
        this.fetchData()
    }

    gotoPage = (param)=> {
        this.loadDataParams = Object.assign(this.loadDataParams,param)
        this.fetchData();
    }

    async fetchData() {
        var requestUrl = this.requestUrl;
        delete this.loadDataParams.dateRangeName;
        try{
            var res = await axios({url:requestUrl,method:"get", params:this.loadDataParams,loading:true});
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
        pagination.totalRecords = data.count;
        pagination.totalPages = data.num_pages;
        pagination.pageSize = this.loadDataParams.page_size;
        pagination.currentPage = this.loadDataParams.page;
        this.setState({
            serverData:data.results,
            pagination:pagination
        })
    }

    sorting = (e)=> {/*排序改变*/
        var sortName = e.target.getAttribute("data-sort-name");
        if(this.fingSortPropFirst(sortName)){
            this.loadDataParams.ordering = sortName.substr(1);
        }else{
            this.loadDataParams.ordering = "-"+sortName;
        }
        this.fetchData()
    }

    fingSortPropFirst (prop) {
        if(prop.indexOf("-") === 0) return true;
        return false;
    }

    getSortClass (prop) {
        if(!prop) return;
        if(this.fingSortPropFirst(prop)){
            return "fa fa-sort-amount-desc";
        } else{
            return "fa fa-sort-amount-asc";
        }
    }

    findRecordById(id) {
        var serverData = this.state.serverData;
        for(var i = 0,l = serverData.length;i < l;i++){
            if(serverData[i].id === id) {
                return [serverData[i],i];
            }
        }
    }

    expandedRow(record) {
        if(record.$showDetail){
            var serverData = this.state.serverData;
            var _serverData = this.findRecordById(record.id);
            _serverData[0].$showDetail = false;
            serverData[_serverData[1]] = _serverData[0];
            this.setState({
                serverData:serverData
            });
            return;
        }/*关闭*/
        this.getExpandedRowData(record);
    }

    getExpandedRowData = (record)=> {
        var r = this.props.config.expandedRow(record);
        var serverData = this.state.serverData;
        var _serverData = this.findRecordById(record.id);
        _serverData[0].$showDetail = true;
        if(r && r instanceof Promise){
            r.then((res)=> {
                _serverData[0].$expandedRowData = res.data;
                serverData[_serverData[1]] = _serverData[0];
                this.setState({
                    serverData:serverData
                });
                return;
            })
        }else{
            if(r){
                _serverData[0].$expandedRowData = r;
                serverData[_serverData[1]] = _serverData[0];
            }
            this.setState({
                serverData:serverData
            });
        }
    }

    edit(record) {
        this.$editModal.open(record,"edit")
    }

    setSwitchTdCache() {
        var switchTdCache = this.state.switchTdCache;
        for(var model of this.state.dataTableModel){
            switchTdCache[model.key] = model.show || false;
        }
        this.setState({switchTdCache})
        console.log(switchTdCache)
    }

    switchTdCacheChange = (switchTdCache)=> {
        this.setState({switchTdCache})
    }

    dataTableModelChange = (dataTableModel) => {
        this.setState({dataTableModel})
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    componentWillMount() {
        this.setSwitchTdCache();
    }

    componentDidMount() {
        this.loadFirstPage();/*请求第一页数据*/
    }

    render() {
        var dataTableModel = this.state.dataTableModel;
        var serverData = this.state.serverData;
        var switchTdCache = this.state.switchTdCache;
        return <QueueAnim delay={300} className="queue-simple">
            <div className="table-responsive" key="table">
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                    <tr>
                        {dataTableModel.map((item,index)=> {
                            var sortName = item.sortName || item.key;
                            var order = this.loadDataParams.ordering;
                            var className = order.indexOf(item.key) !==-1 ? this.getSortClass(order) : "fa fa-sort";
                            sortName = this.fingSortPropFirst(order) ? "-"+sortName : sortName;
                            return switchTdCache[item.key] ?
                                <DragTableTh titleModel={dataTableModel}
                                                  titleModelChange={(dataTableModel)=>{this.dataTableModelChange(dataTableModel)}}
                                                  dataIndex={index} key={"_"+index} title={item.title}>
                                    {
                                        item.sorter ?
                                            <i className={className} style={{marginLeft:"5px",cursor:"pointer"}} onClick={this.sorting} data-sort-name={sortName}></i>
                                            : null
                                    }
                                </DragTableTh>
                                /*<th data-field={item.key} key={item.key} style={item.style}>
                                {item.title}
                                
                            </th>*/ : null
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.pagination.totalRecords === 0 ?
                            <tr>
                                <td colSpan="30">
                                    <div className="alert alert-info">
                                        <h4><i className="icon fa fa-warning"></i>没有数据</h4>
                                    </div>
                                </td>
                            </tr> :
                            serverData.map((item,index)=> {
                                return [
                                    <tr key={'_'+index}>
                                        {
                                            dataTableModel.map((modelItem,index)=> {
                                                var val = item[modelItem.key];
                                                return switchTdCache[modelItem.key] ?
                                                        <td key={modelItem.key}>{
                                                        modelItem.render ? modelItem.render(val,item,this) : val
                                                    }</td> : null
                                            })
                                        }
                                    </tr>,
                                    item["$showDetail"] ? this.props.config.getExpandedRow(item) : null
                                ]
                            })
                    }

                    <tr>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Pagination paginationMessage={this.state.pagination} gotoPage={this.gotoPage}></Pagination>
        </QueueAnim>
    }
}