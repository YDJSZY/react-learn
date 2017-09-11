/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import { Modal, Button, Row, Col, Form, Input, InputNumber, Select, DatePicker, Switch, Icon } from 'antd';
const FormItem = Form.Item;
export default class EditModal extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            visible:props.config.visible
        }
        this.model = props.config.model;
    }

    open() {
        this.setState({
            visible:true
        })
    }

    handleOk = ()=> {

    }

    handleCancel = ()=> {

    }

    render() {
        return  <Modal
                    width="620"
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form layout="horizontal">
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
                                                    <Input placeholder={model.placeholder} name={model.key} />
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
                                                    <InputNumber placeholder={model.placeholder} name={model.key} style={{"width":"100%"}} />
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
                                                    <DatePicker placeholder={model.placeholder} name={model.key} format={model.config.format} style={{"width":"100%"}}>
                                                    </DatePicker>
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
                                                    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} >
                                                    </Switch>
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
                                                    <textarea placeholder={model.placeholder} style={{"width":"100%","padding":"7px 6px","border":"1px solid #d9d9d9","borderRadius":"4px"}}>
                                                    </textarea>
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