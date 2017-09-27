/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import moment from 'moment';
import axios from 'axios';
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
            record:{

            }
        }
        this.model = props.model;
        this.formValues = {};
    }

    open(record,type) {
        this.setState({
            record:record,
            modalType:type
        },function () {
            $("#editModal").modal("show");
        })
    }

    handleCancel = ()=> {
        this.setState({
            visible:false,
            modalType:""
        })
    }/*关闭modal*/

    handleOk = ()=> {
        this.submitForm();
    }

    create = (initialValue)=> {
        this.setFormValue(initialValue);
        this.open("create");
    }

    edit = (record)=> {
        this.props.form.resetFields();
        this.setFormValue(record);
        this.open("edit");
    }

    setFormValue(record){
        for(var prop of this.model){
            if(!prop.edit) continue;
            var obj = {};
            if(prop.type=="date"){
                obj[prop.key] = moment(record[prop.key] || new Date(),prop.format || "YYYY-MM-DD");
            }else{
                obj[prop.key] = record[prop.key];
            }
            this.recordId = record.id;
            if(this._isMounted) this.props.form.setFieldsValue(obj);
        }
    }/*给表单赋值*/
    
    submitForm() {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) {
                console.debug(err);
                message.error('表单有误请检查');
                return;
            }
            for(var prop in values) {
                if(typeof values[prop] === "undefined") continue;
                if(values[prop] instanceof moment){
                    this.formValues[prop] = values[prop]._d;
                } else{
                    this.formValues[prop] = values[prop]
                }
            }/*收集表单各个字段的值*/
            this.saveForm(this.formValues,this.state.modalType);/*调用父组件的保存表单方法*/
        });
    }

    saveForm = (data,type)=> {
        var method,url;
        /*if(type == "create"){
            method = "POST";
            url = this.props.config.dataUrl;
        }else{
            method = "PUT";
            url = this.props.config.dataUrl+"/"+this.recordId+"/"
        }*/
        console.log(this.state.record);
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

    preview = (file)=> {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    closePreview = ()=> {
        this.setState({
            previewVisible: false,
        });
    }

    onUploadChange = ({ file, fileList })=> {
        console.log(file)
    }

    inputChange = (e,key)=>{
        var record = this.state.record;
        record[key] = e.target.value
        this.setState({record})
    }

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
        </div>
    }
}