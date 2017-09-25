/**
 * Created by luwenwei on 17/8/29.
 */
import MyMenu from '../components/nav';
import Main from '../route/routes';
import { Layout, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import React from "react";
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false
        }
    }
    toggle = ()=> {
        this.setState({
            collapsed: !this.state.collapsed,
        });

    }
    render() {
        return <div className="app app-header-fixed" id="app">
            <div className="app-header navbar" style={{textAlign: "center"}}>
                <div className="navbar-header bg-info dker" style={{background: "#108ee9"}}>
                    <button className="pull-right visible-xs dk" data-toggle="className:show" data-target=".navbar-collapse">
                        <i className="glyphicon glyphicon-cog"></i>
                    </button>
                    <button className="pull-right visible-xs" data-toggle="className:off-screen" data-target=".app-aside">
                        <i className="glyphicon glyphicon-align-justify"></i>
                    </button>
                    <a href="#/" className="navbar-brand text-lt system-name" style={{fontSize: "19px"}}>
                        <span className="hidden-folded">Admin</span>
                    </a>
                </div>
                <div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
                    <div className="nav navbar-nav hidden-xs">
                        <a href="" className="btn no-shadow navbar-btn" data-toggle="className:app-aside-folded" data-target=".app">
                            <i className="fa fa-dedent fa-fw text"></i>
                            <i className="fa fa-indent fa-fw text-active"></i>
                        </a>
                    </div>
                    <ul className="nav navbar-nav hidden-sm">
                    </ul>
                </div>
            </div>
            <MyMenu />
            <div className="app-content">
                <div></div>
                <a href className="off-screen-toggle hide" data-toggle="className:off-screen" data-target=".app-aside" ></a>
                <div className="app-content-body ainmate-scale-up">
                    <Main />
                </div>
            </div>
            <div className="app-footer wrapper b-t bg-light" style={{"textAlign": "center"}}>
                <span>
                    <strong></strong>
                </span>
            </div>
        </div>
    }
}

