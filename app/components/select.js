/**
 * Created by luwenwei on 17/9/3.
 */
import React from "react";
import { Select } from 'antd';
export default class SelectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    selectChange(value) {
        var model = this.props.config.model;
        this.props.config.onSelect(model,value);
    }

    render() {
        return <Select
                    mode={this.props.config.mode}
                    value={this.props.config.value}
                    allowClear
                    showSearch
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    optionFilterProp="'value'"
                    style={this.props.config.style}
                    placeholder={this.props.config.placeholder || '请选择'}
                    onChange={this.selectChange.bind(this)}
                        >
                    {this.props.config.source.map(function(item,index){
                        return <Select.Option key={'_'+index} value={item.id}>{item.name}</Select.Option>
                    })}
                </Select>
    }
}