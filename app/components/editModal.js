/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import moment from 'moment';
import axios from 'axios';
import { Modal,message, Upload, Row, Col, Form, Input, InputNumber, Select, DatePicker, Switch, Icon } from 'antd';
const FormItem = Form.Item;
class EditModal extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            modalType:"",
            previewVisible:false,
            previewImage:"",
            fileList:[]
        }
        this.model = props.config.model;
        this.formValues = {};
    }

    open(modalType) {
        this.setState({
            visible:true,
            modalType:modalType
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

    edit(record) {
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
            this.props.form.setFieldsValue(obj);
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
        if(type == "create"){
            method = "POST";
            url = this.props.config.dataUrl;
        }else{
            method = "PUT";
            url = this.props.config.dataUrl+"/"+this.recordId+"/"
        }
        console.log(data)
        axios({
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
        })
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

    componentWillReceiveProps(nextProps) {
    }

    componentDidMount() {
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        var modelRules = {};
        for(var model of this.props.config.model) {
            if(!model.options) continue;
            modelRules[model.key] = model.options;
        }
        return  <div>
                    <Modal
                    width="620px"
                    okText="保存"
                    maskClosable={false}
                    title={this.props.config.title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form layout="horizontal" onSubmit={this.submitForm}>
                        <Row>
                            {
                                this.model.map((model,index)=>{
                                    var tpl;
                                    switch (model.type) {
                                        case 'text':
                                            tpl = <Col xs={24} sm={12} md={12} lg={12} key={'_'+index} style={{"padding":"0 10px","height":"88px"}}>
                                                    <FormItem
                                                        xs={ {span: 24} }
                                                        sm={ {span: 6} }
                                                        label={model.title}
                                                        help={model.help}
                                                    >
                                                        {getFieldDecorator(model.key, modelRules[model.key])(
                                                            <Input placeholder={model.placeholder} name={model.key} />
                                                        )}
                                                    </FormItem>
                                                </Col>
                                            break;
                                        case 'number':
                                            tpl = <Col xs={24} sm={12} md={12} lg={12} key={'_'+index} style={{"padding":"0 10px","height":"88px"}}>
                                                    <FormItem
                                                        xs={ {span: 24} }
                                                        sm={ {span: 6} }
                                                        label={model.title}
                                                        help={model.help}
                                                    >
                                                        {getFieldDecorator(model.key, modelRules[model.key])(
                                                            <InputNumber min={model.min} max={model.max}placeholder={model.placeholder} name={model.key} style={{"width":"100%"}} />
                                                        )}
                                                    </FormItem>
                                                </Col>
                                            break;
                                        case 'select':
                                            tpl = <Col xs={24} sm={12} md={12} lg={12} key={'_'+index} style={{"padding":"0 10px","height":"88px"}}>
                                                    <FormItem
                                                        xs={ {span: 24} }
                                                        sm={ {span: 6} }
                                                        label={model.title}
                                                        help={model.help}
                                                    >
                                                        {getFieldDecorator(model.key, modelRules[model.key])(
                                                            <Select
                                                                mode={model.mode}
                                                                allowClear
                                                                showSearch
                                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                                optionFilterProp="'value'"
                                                                placeholder={model.placeholder || '请选择'}
                                                                //onChange={this.selectChange.bind(this)}
                                                            >
                                                                {model.source.map(function(item,index){
                                                                    return <Select.Option key={'_'+index} value={item.id}>{item.name}</Select.Option>
                                                                })}
                                                            </Select>
                                                        )}
                                                    </FormItem>
                                                </Col>
                                            break;
                                        case 'date':
                                            tpl = <Col xs={24} sm={12} md={12} lg={12} key={'_'+index} style={{"padding":"0 10px","height":"88px"}}>
                                                    <FormItem
                                                        xs={ {span: 24} }
                                                        sm={ {span: 6} }
                                                        label={model.title}
                                                        help={model.help}
                                                    >
                                                        {getFieldDecorator(model.key, modelRules[model.key])(
                                                            <DatePicker placeholder={model.placeholder} name={model.key} format={model.config.format} style={{"width":"100%"}}>
                                                            </DatePicker>
                                                        )}
                                                    </FormItem>
                                                </Col>
                                            break;
                                        case 'switch':
                                            tpl = <Col xs={24} sm={12} md={12} lg={12} key={'_'+index} style={{"padding":"0 10px","height":"88px"}}>
                                                    <FormItem
                                                        xs={ {span: 24} }
                                                        sm={ {span: 6} }
                                                        label={model.title}
                                                        help={model.help}
                                                    >
                                                        {getFieldDecorator(model.key, modelRules[model.key])(
                                                            <Switch defaultChecked={modelRules[model.key].initialValue} checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} >
                                                            </Switch>
                                                        )}
                                                    </FormItem>
                                                </Col>
                                            break;
                                        case 'textarea':
                                            tpl = <Col xs={24} sm={12} md={12} lg={12} key={'_'+index} style={{"padding":"0 10px"}}>
                                                    <FormItem
                                                        xs={ {span: 24} }
                                                        sm={ {span: 6} }
                                                        label={model.title}
                                                        help={model.help}
                                                    >
                                                        {getFieldDecorator(model.key, modelRules[model.key])(
                                                            <Input.TextArea placeholder={model.placeholder} style={{"width":"100%","padding":"7px 6px","border":"1px solid #d9d9d9","borderRadius":"4px"}}>
                                                            </Input.TextArea>
                                                        )}
                                                    </FormItem>
                                                </Col>
                                            break;
                                        case 'file':
                                            const { previewVisible, previewImage,fileList } = this.state;
                                            const uploadButton = (
                                                <div>
                                                    <Icon type="plus" />
                                                    <div className="ant-upload-text">{model.uploadBtnText || "上传"}</div>
                                                </div>
                                            );
                                            var fileCount = model.fileCount || 1;
                                            tpl = <Col xs={24} sm={12} md={12} lg={12} key={'_'+index} style={{"padding":"0 10px"}}>
                                                <FormItem
                                                    xs={ {span: 24} }
                                                    sm={ {span: 6} }
                                                    label={model.title}
                                                    help={model.help}
                                                >
                                                    {getFieldDecorator(model.key, modelRules[model.key])(
                                                        <Upload
                                                            action={model.uploadUrl}
                                                            listType="picture-card"
                                                            fileList={fileList}
                                                            name={model.filename || "file_name"}
                                                            onPreview={this.preview}
                                                            onChange={this.onUploadChange}
                                                        >
                                                            {fileList.length >= fileCount ? null : uploadButton}
                                                        </Upload>
                                                    )}
                                                </FormItem>
                                            </Col>
                                            break;
                                    }
                                    return tpl;
                                })
                            }
                        </Row>
                    </Form>
                </Modal>
                <Modal title="预览"
                    visible={this.state.previewVisible} footer={null} onCancel={this.closePreview}>
                    <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                </Modal>
                </div>
    }
}

const EditModalForm = Form.create()(EditModal);
export default EditModalForm