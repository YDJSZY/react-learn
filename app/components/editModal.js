/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import moment from 'moment';
import { DatePicker } from 'antd';
import AlertContainer from 'react-alert'
import Switch from 'rc-switch';
require('../../node_modules/rc-switch/assets/index.css');
import Select from 'react-select';
import axios from 'axios';
import {constants} from '../untils/global';
import UploadFileModal from '../components/uploadFileModal';

export default class EditModal extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            modalType:"",
            previewVisible:false,
            previewImage:"",
            fileList:[],
            record:{}
        };
        this.alertOptions = {
            offset: 14,
            position: 'top right',
            theme: 'light',
            time: 5000,
            transition: 'scale'
        }
        this.model = props.config.model;
    }

    open(record,type) {
        this.setState({
            record:record,
            modalType:type
        },function () {
            $("#editModal").modal("show");
        })
    }

    validateForm(record) {
        var errors = [];
        for(var model of this.model){
            if(model.type === "date"){
                record[model.key] = record[model.key] ? moment(record[model.key]._d || record[model.key]).format(model.config.format) : void 0;
            }
            if(model.validate){
                var validateResult = model.validate(record)
                if(validateResult) errors.push(validateResult);
            }
        }
        errors = errors.join(";").replace(/required/,"必填项不能为空").replace(/required/g,"");/*将所有的required替换为一段字符串*/
        if(errors.length) {
            this.$alert.show(errors, {
                type: 'error'
            })
            return "error";
        }
        return "right";
    }

    saveForm = (data,type)=> {
        var record = Object.assign({},this.state.record);
        if(this.validateForm(record) === "error") return;
        record = this.props.config.beforeSaveForm(record);
        var method,url;
        /*if(type == "create"){
            method = "POST";
            url = this.props.config.dataUrl;
        }else{
            method = "PUT";
            url = this.props.config.dataUrl+"/"+this.recordId+"/"
        }*/
        console.log(record);
        /*axios({
            url:url,
            method:method,
            data:data
        }).then((res)=> {
            if(res.status >=200 && res.status <=301){
                message.success('保存成功!',10);
                this.props.config.saveFormCallBack(res,type);
                return;
            }
            message.error('保存失败!',10);
            console.error(res.data);
        })*/
    }

    inputChange = (e,key)=> {
        var record = this.state.record;
        record[key] = e.target ? e.target.value : e
        this.setState({record})
    }/*监听表单填写*/

    singleSelectChange = (e,key)=> {
        var selectVal = e ? e.value : null;
        var record = this.state.record;
        record[key] = selectVal;
        this.setState({record})
    }

    multiSelectChange = (e,key)=> {
        var cache = [];
        for(var v of e) {
            cache.push(v.value);
        }
        var record = this.state.record;
        record[key] = record[key] || [];
        record[key] = cache;
        this.setState({record})
    }

    dateChange = (e,key,format)=> {
        var record = this.state.record;
        if(!e) {
            record[key] = ""/*若没填写日期*/
        }else{
            record[key] = moment(e._d,format || "YYYY-MM-DD");/*格式化*/
        }
        this.setState({record})
    }

    showUploadFile = (options)=> {
        this.$uploadFileModal.showModal()
    }/*上传文件*/

    acceptFile(file) {
        console.log(file)
    }/*接受上传的文件*/

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    render() {
        var record = this.state.record;
        return  <div className="modal fade" data-backdrop="static" data-effect="zoom" data-tabindex="-1" data-role="dialog" id="editModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" data-aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title"></h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" data-role="form" id="editForm">
                            <div className="row">
                                {
                                    this.model.map((model,index)=>{
                                        var tpl;
                                        switch (model.type) {
                                            case 'text':
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8">
                                                            <input type="text" id={"id_"+model.key} name={model.key}
                                                                   placeholder={model.placeholder || ''} className="form-control"
                                                                   value={record[model.key] || ""}
                                                                   onChange={(e) => {this.inputChange(e,model.key)}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                            case 'number':
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8">
                                                            <input type="number" id={"id_"+model.key} name={model.key}
                                                                   placeholder={model.placeholder || ''} className="form-control"
                                                                   value={record[model.key] || ""}
                                                                   onChange={(e) => {this.inputChange(e,model.key)}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                            case 'switch':
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8" style={{height:"34px",lineHeight:"34px"}}>
                                                            <Switch checked={record[model.key] || false} onChange={(e) => {this.inputChange(e,model.key)}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                            case 'singleSelect':
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8" style={{height:"34px",lineHeight:"34px"}}>
                                                            <Select
                                                                name="form-field-name"
                                                                placeholder={model.placeholder || "请选择"}
                                                                value={record[model.key] || ""}
                                                                options={this.props.config[model.source] || constants[model.source]}
                                                                onChange={(e) => {this.singleSelectChange(e,model.key)}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                            case 'multiSelect':
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8" style={{height:"34px",lineHeight:"34px"}}>
                                                            <Select
                                                                multi={true}
                                                                placeholder={model.placeholder || "请选择"}
                                                                name="form-field-name"
                                                                value={record[model.key] || ""}
                                                                options={this.props.config[model.source] || constants[model.source]}
                                                                onChange={(e) => {this.multiSelectChange(e,model.key)}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                            case 'textarea':
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8">
                                                            <textarea id={"id_"+model.key} name={model.key}
                                                                   placeholder={model.placeholder || ''} className="form-control"
                                                                   value={record[model.key] || ""}
                                                                   onChange={(e) => {this.inputChange(e,model.key)}}>
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                            case 'date':
                                                var date = record[model.key] ? moment(record[model.key],model.config.format || "YYYY-MM-DD") : undefined
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key} style={{height:"49px"}}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8">
                                                            <DatePicker
                                                                value={date} style={{width:"100%"}} showTime={model.config.showTime || false} format={model.config.format || "YYYY-MM-DD"} onChange={(e) => {this.dateChange(e,model.key,model.config.format)}}>
                                                            </DatePicker>
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                            case 'file':
                                                var options = {};
                                                tpl = <div className="col-sm-6 col-md-6 col-xs-12" key={"_"+model.key} style={{height:"49px"}}>
                                                    <div className="form-group">
                                                        <label htmlFor={"id_"+model.key} className="col-sm-3 col-md-3 col-xs-3 control-label">
                                                            {model.title}
                                                        </label>
                                                        <div className="col-sm-8 col-md-8 col-xs-8">
                                                            <div className="input-group">
                                                                <input type="text" id={"id_"+model.key} name={model.key}
                                                                       placeholder={model.placeholder || ''} className="form-control"
                                                                       value={record[model.key] || ""} onChange={(e) => {this.inputChange(e,model.key)}} />
                                                                <span className="input-group-btn">
                                                                    <button className="btn btn-success" onClick={() => {this.showUploadFile(options)}}><i className="fa fa-upload"></i></button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                break;
                                        }
                                        return tpl;
                                    })
                                }
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <span className="pull-right">
                            <button type="button" className="btn btn-warning" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-success" onClick={this.saveForm}>保存</button>
                        </span>
                    </div>
                </div>
            </div>
            <AlertContainer ref={ref => this.$alert = ref} {...this.alertOptions} />
            <UploadFileModal ref={ref => this.$uploadFileModal = ref} acceptFile={this.acceptFile}></UploadFileModal>
        </div>
    }
}