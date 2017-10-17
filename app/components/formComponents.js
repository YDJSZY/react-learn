/**
 * Created by luwenwe on 2017/10/17.
 */
import React from "react";

class InputComponent extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {}
    }

    valueChange = (e)=> {
        var val = e.target.value;
        var config = this.props.config;
        var key = config.key;
        config.dataSource[key] = val;
        if(config.callBack) config.callBack(config.dataSource,key)
        this.setState({
            dataSource:config.dataSource
        })
    }
    
    render() {
        var config = this.props.config;
        var dataSource = config.dataSource;
        var key = config.key;
        var type = config.type;
        var placeholder = config.placeholder;
        return type === "textarea" ? <textarea type={type} className={'form-control '+(config.className || '')} placeholder={placeholder} value={dataSource[key] || ''} onChange={this.valueChange}></textarea> :
                <input type={type} className={'form-control '+(config.className || '')} placeholder={placeholder} value={dataSource[key] || ''} onChange={this.valueChange} />
    }
}

export { InputComponent }