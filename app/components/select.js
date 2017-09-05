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
        this.props.config.onSelect(value);
    }

    render() {
        return <Select
                    mode={this.props.config.mode}
                    allowClear
                    showSearch
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    optionFilterProp="'value'"
                    style={this.props.config.style}
                    placeholder="Select a person"
                    onChange={this.selectChange.bind(this)}
                        >
                    {this.props.config.source.map(function(item,index){
                        return <Select.Option key={'_'+index} value={item.id}>{item.name}</Select.Option>
                    })}
                </Select>
    }
}