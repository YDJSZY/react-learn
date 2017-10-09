/**
 * Created by luwenwei on 17/9/3.
 */
import React from "react";
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

export default class SelectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    selectChange(value) {
        var model = this.props.model;
        this.props.onSelect(value,model);
    }

    render() {
        return <Select
                    mode={this.props.mode}
                    value={this.props.value}
                    allowClear
                    showSearch
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    optionFilterProp="'value'"
                    style={this.props.style}
                    placeholder={this.props.placeholder || '请选择'}
                    onChange={this.selectChange.bind(this)}
                        >
                    {this.props.source.map((item,index)=>{
                        return <Select.Option key={'_'+index} value={item[this.props.optionValue || 'id']}>{item.name}</Select.Option>
                    })}
                </Select>
    }
}