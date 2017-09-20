/**
 * Created by Apple on 17/2/6.
 */
import cs from 'classnames'//引入classnames依赖库
import React from "react";
import { BrowserRouter as StaticRouter,NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { getLocalStorage } from '../untils/global';
const $localStorage = getLocalStorage();
const currentRoute = $localStorage.route;
const keys = {
    page_b:"sub1",
    page_c:"sub1"
}
export default class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: []
        };
        this.rootSubmenuKeys = ['sub1'];
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render() {
        var collapsedClass = cs({
            'nav-text':true,
            'hideNavText':this.props.collapsed
        });

        return  <Menu theme="dark" mode="inline" openKeys={this.state.openKeys}
                      onOpenChange={this.onOpenChange}
                      defaultOpenKeys={[keys[currentRoute || 'page_a']]}
                      defaultSelectedKeys={[currentRoute || 'page_a']}>
                    <Menu.Item key="page_a">
                        <NavLink to="/page_a/">
                            <Icon type="user" />
                            <span className={collapsedClass} style={{"fontSize":"14px"}}>
                                page_a
                            </span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="page_b">
                            <NavLink to="/page_b/">
                                <Icon type="video-camera" />
                                <span id="page_b" className={collapsedClass} style={{"fontSize":"14px"}}>
                                    page_b
                                </span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="page_c">
                            <NavLink to="/page_c/">
                                <Icon type="book" />
                                <span className={collapsedClass} style={{"fontSize":"14px"}}>
                                    page_c
                                </span>
                            </NavLink>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
    }
};
