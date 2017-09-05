/**
 * Created by Apple on 17/2/6.
 */
import cs from 'classnames'//引入classnames依赖库
import React from "react";
import { BrowserRouter as StaticRouter,NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
export default class MyMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var collapsedClass = cs({
            'nav-text':true,
            'hideNavText':this.props.collapsed
        });
        return  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="page_a">
                        <NavLink to="/page_a">
                            <Icon type="user" />
                            <span className={collapsedClass}>
                                page_a
                            </span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="page_b">
                        <NavLink to="/page_b">
                            <Icon type="video-camera" />
                            <span className={collapsedClass}>
                                page_b
                            </span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
    }
};
