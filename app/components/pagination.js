/**
 * Created by luwenwei on 17/9/26.
 */
import React from "react";
const UiPagination = require("../untils/ui-pagination");
export default class Pagination extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            paginationMessage:this.props.paginationMessage
        }

    }

    everyPageSizeChange = (e)=> {
        this.props.gotoPage({page_size:e.target.value,page:1});
        this.uiPagination.currentPage = 1;
        this.uiPagination.init();
    }

    componentDidMount() {
        this.uiPagination = new UiPagination(this.state.paginationMessage.totalPages,this.$uiPagination);
        this.uiPagination.init();
        $(this.$uiPagination).on("gotoPage",(e,page)=> {
            this.props.gotoPage({page:page})
        })
    }

    render() {
        return <div>
                <div style={{float:"left"}}>
                    <span>{"一共"+this.state.paginationMessage.totalRecords+"条数据，"+"分为"+this.state.paginationMessage.totalPages+"页，"+"当前"+this.state.paginationMessage.currentPage+"页。"}</span>
                    <span style={{display: "inline-block",width: "60px"}}>
                        <select className="custom-select" style={{width: "60px"}} onChange={this.everyPageSizeChange}>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                            <option>200</option>
                        </select>
                    </span>
                </div>
                <div style={{float:"right"}}>
                    <span ref={(ref) => { this.$uiPagination = ref; }}></span>
                </div>
                <div style={{clear: "both"}}></div>
            </div>
    }
}