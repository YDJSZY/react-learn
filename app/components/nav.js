/**
 * Created by Apple on 17/2/6.
 */
import cs from 'classnames'//引入classnames依赖库
import React from "react";
import { BrowserRouter as StaticRouter,Link } from 'react-router-dom';
//import { Link, Route } from 'react-keeper'
import { getLocalStorage } from '../untils/global';
const $localStorage = getLocalStorage();
const currentRoute = $localStorage.route;

export default class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        var $href = '#/'+currentRoute+'/';
        var admin_nav_a = $(".admin-nav").find("a[href='"+$href+"']");
        $(admin_nav_a).parent("li").addClass("active");
        $(admin_nav_a).parents("li.main-menu").addClass("active");
    }

    render() {
        var collapsedClass = cs({
            'nav-text':true,
            'hideNavText':this.props.collapsed
        });

        return  <div className="app-aside hidden-xs bg-black" style={{position: "fixed",height: "100%"}}>
                    <div className="aside-wrap">
                        <div className="navi-wrap">
                            <nav className="navi">
                                <ul className="nav admin-nav">
                                    <li className="main-menu">
                                        <a href className="auto">
                                          <span className="pull-right text-muted">
                                                <i className="fa fa-fw fa-angle-right text"></i>
                                                <i className="fa fa-fw fa-angle-down text-active"></i>
                                          </span>
                                            <i className="fa fa-money text-info-dker"></i>
                                            <span className="font-bold">页面</span>
                                        </a>
                                        <ul className="nav nav-sub dk">
                                            <li>
                                                <Link to="/page_b/">page_b</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/page_a/">page_a</Link>
                                    </li>
                                    <li>
                                        <Link to="/page_c/">page_c</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
    }
};
