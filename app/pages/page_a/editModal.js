/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import moment from 'moment';
import { Modal,message, Button, Row, Col, Form, Input, InputNumber, Select, DatePicker, Switch, Icon } from 'antd';
const FormItem = Form.Item;
class EditModal extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            visible:props.visible,
            modalType:props.modalType
        }
        this.model = props.config.model;
        this.formValues = {};
    }

    open() {
        this.setState({
            visible:true
        })
    }

    handleOk = ()=> {
        this.submitForm();
    }

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
            }
            console.log(this.formValues)
        });
    }

    handleCancel = ()=> {
        this.setState({
            visible:false,
            modalType:""
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible:nextProps.visible
        })
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
        return  <Modal
                    width="620"
                    okText="保存"
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
                                    }
                                    return tpl;
                                })
                            }
                        </Row>
                    </Form>
                </Modal>
    }
}

const EditModalForm = Form.create({})(EditModal);
export default EditModalForm