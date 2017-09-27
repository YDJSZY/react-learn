/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import axios from 'axios';
import Pagination from './pagination';
import EditModal from './editModal';
require('../styles/dataTable.css');
export default class DataTable extends React.Component {
    static defaultProps = {
        
    }

    constructor(props) {
        super(props);
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

    gotoPage = (param)=> {
        console.log(param)
        this.loadDataParams = Object.assign(this.loadDataParams,param)
        this.fetchData();
    }

    async fetchData() {
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

    sorterChange(sorter) {/*排序改变*/
        var order = sorter.order;
        if(!order) return;
        var key = sorter.column.sortKey || sorter.columnKey;
        this.loadDataParams.order = order=="descend" ? "-"+key : key;
        this.fetchData()
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

    componentDidMount() {
        this.loadFirstPage();
    }
    
    render() {
        var dataTableModel = this.state.dataTableModel;
        var serverData = this.state.serverData;
        return <div>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped table-bordered">
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
                    </div>
                    <Pagination paginationMessage={this.state.pagination} gotoPage={this.gotoPage}></Pagination>
                    <EditModal model={this.state.dataTableModel} ref={(ref) => { this.$editModal = ref; }}></EditModal>
                </div>
    }
}