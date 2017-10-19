/**
 * Created by luwenwe on 2017/10/19.
 */
import React from "react";

export default class EyeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.fieldModel = this.props.fieldModel;
    }

    openPanel = ()=> {
        $("#switchTdPanel").show();
    }

    selectField = ()=> {

    }
    
    render() {
        var fieldModel = this.fieldModel;
        var switchTdCache = this.state.switchTdCache;
        return <div className="mySelectBox">
                <div className="openBtn">
                    <button className="btn btn-default" id="open" onClick={this.openPanel}>
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
                <div className="switch-td-panel" data-tabindex="1" id="switchTdPanel" onClick={this.selectField}>
                    <ul>
                        {
                            fieldModel.map(function (item,index) {
                                return <li key={item.key} onClick={(e)=>{this.selectField(e,item.fieldName)}} className="field_dl">
                                        <span id={'_'+item.key} className={"myCheckBox" + switchTdCache[item.fieldName] ? " selectSpan" : ""}>✔</span>
                                        <label htmlFor={item.key}>{item.title}</label>
                                    </li>
                            })
                        }
                    </ul>
                </div>
            </div>
    }
}
