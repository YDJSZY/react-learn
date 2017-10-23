/**
 * Created by luwenwei on 17/10/21.
 */
import React from "react";

export default class TableThComponent extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            dragStatus:null
        };
        this.mu = 0;
        this.styles = {
            start: {background: "#108ee9", color: "#fff", opacity: 0.5},
            end: null
        }

    }

    dragStart = (e) => {
        window.$dragRecord = {};
        this.setState({dragStatus:"start"});
        window.$dragRecord.$dragStartIndex = parseInt(e.target.getAttribute("data-index"));
        e.dataTransfer.setData("Index",window.$dragRecord.$dragStartIndex);
    }

    dragOver = (e) => {
        e.preventDefault();
        if(this.dragStatus === "enter") {
            return;
        };
        window.$dragRecord.$dragLastStartIndex = null;
        return false;
    }/*拖拽元素在目标元素头上移动的时候*/

    dragEnter = (e) => {
        this.dragStatus = "";
        var $dragStartIndex = window.$dragRecord.$dragStartIndex;
        var targetElement = e.target;
        var titleModel = this.props.titleModel;
        var targetIndex = parseInt(e.target.getAttribute("data-index"));/*目标节点的index*/
        //window.$dragTargetElement ? window.$dragTargetElement.style = null : "";
        if(window.$dragRecord.$dragStartIndex === targetIndex) return;
        if(window.$dragRecord.$dragLastStartIndex === targetIndex) return;
        if(isNaN(targetIndex)) return;/*防止当鼠标落在你不希望移动的节点上*/
        window.$dragRecord.$dragTargetIndex = targetIndex;
        window.$dragRecord.$dragLastStartIndex = window.$dragRecord.$dragStartIndex;
        window.$dragRecord.$dragStartIndex = window.$dragRecord.$dragTargetIndex;
        /*window.$dragTargetElement = targetElement;
        targetElement.style.background = "#108ee9";
        targetElement.style.color = "#fff";*/
        var startSource = titleModel[$dragStartIndex];
        titleModel[$dragStartIndex] = titleModel[targetIndex];
        titleModel[targetIndex] = startSource;
        this.dragStatus = "enter"
        this.setState({dragStatus:"enter"});
        this.props.titleModelChange(titleModel);
        return true;
    }

    dragDrop = (e) => {
        e.preventDefault();
        var data = e.dataTransfer.getData("Index");
        //e.target.style = null;
    }/*拖拽元素进入目标元素头上，同时鼠标松开的时候*/

    dragEnd = (e) => {
        this.setState({dragStatus:"end"});
    }

    render() {
        var title = this.props.title;
        var index = this.props.dataIndex;
        return <th draggable="true"
                   data-index={index}
                   onDragStart={this.dragStart}
                   onDragOver={this.dragOver}
                   onDragEnter={this.dragEnter}
                   onDrop={this.dragDrop}
                   onDragEnd={this.dragEnd}
                   className="drag-table-th"
                   //style={this.styles[this.state.dragStatus]}
                    >
                    <span style={{cursor:"pointer"}}>{title}</span>
            {
                this.props.children
            }
        </th>
    }
}