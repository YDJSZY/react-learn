/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import axios from 'axios';
import TableTr from '../components/tableTr';
require('../styles/dataTable.css');
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
            pagination:props.config.pagination,
            dataTableModel:props.config.dataTableModel
        }
        this.loadDataParams = props.config.loadDataParams;
        this.requestUrl = props.config.requestUrl;

    }

    loadFirstPage = ()=> {
        this.loadDataParams.page = 1;
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

    edit(id) {

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
        if(record.showDetail){
            var serverData = this.state.serverData;
            var _serverData = this.findRecordById(record.id);
            _serverData[0].showDetail = false;
            serverData[_serverData[1]] = _serverData[0];
            this.setState({
                serverData:serverData
            });
            return;
        }
        this.getExpandedRowData(record);
    }

    getExpandedRowData = (record)=> {
        var r = this.props.config.expandedRow(record);
        var serverData = this.state.serverData;
        var _serverData = this.findRecordById(record.id);
        _serverData[0].showDetail = true;
        if(r && r instanceof Promise){
            r.then((res)=> {
                _serverData[0].$expandedRowData = res.data;
                serverData[_serverData[1]] = _serverData[0];
                console.log(serverData)
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

    componentDidMount() {
        this.loadFirstPage();
    }
    
    render() {
        var dataTableModel = this.state.dataTableModel;
        var serverData = this.state.serverData;
        return <table className="table table-hover table-striped table-bordered">
            <thead>
            <tr>
                {dataTableModel.map(function (item,index) {
                    return <th data-field={item.key} key={item.key} style={item.style}>
                            {item.title}
                            {item.sorter ? <i className="fa fa-sort sort" style={{marginLeft:"5px"}} data-sort-name={item.sortName || item.key}></i> : null}
                        </th>
                })}
            </tr>
            </thead>
            <tbody>
                {
                    this.state.serverData.length === 0 ?
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
                                            return <td key={modelItem.key}>{
                                                    modelItem.render ? modelItem.render(val,item,this) : val
                                                }</td>
                                        })
                                    }
                                </tr>,
                                item["showDetail"] ? this.props.config.getExpandedRow(item) : null
                            ]
                        })
                }

            <tr>
            </tr>
            </tbody>
        </table>
    }
}