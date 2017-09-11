/**
 * Created by luwenwe on 2017/9/11.
 */
import React from "react";
import { Modal, Button, Row, Col, Form, Input, InputNumber, Select } from 'antd';
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
                                            tpl = <Col span={12} key={'_'+index} style={{"padding":"0 10px"}}>
                                                <FormItem
                                                    xs={ {span: 24} }
                                                    sm={ {span: 6} }
                                                    label={model.title}
                                                    hasFeedback
                                                >
                                                    <Input />
                                                </FormItem>
                                            </Col>
                                            break;
                                        case 'number':
                                            tpl = <Col span={12} key={'_'+index} style={{"padding":"0 10px"}}>
                                                <FormItem
                                                    xs={ {span: 24} }
                                                    sm={ {span: 6} }
                                                    label={model.title}
                                                    hasFeedback
                                                >
                                                    <InputNumber style={{"width":"100%"}} />
                                                </FormItem>
                                            </Col>
                                            break;
                                        case 'select':
                                            tpl = <Col span={12} key={'_'+index} style={{"padding":"0 10px"}}>
                                                <FormItem
                                                    xs={ {span: 24} }
                                                    sm={ {span: 6} }
                                                    label={model.title}
                                                    hasFeedback
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
                                    }
                                    return tpl;
                                })
                            }
                        </Row>
                    </Form>
                </Modal>
    }
}