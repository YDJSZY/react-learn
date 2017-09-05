/**
 * Created by luwenwei on 17/8/29.
 */
import MyMenu from '../components/nav';
import Main from '../route/routes';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import React from "react";
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false
        }
    }
    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });

    }
    render() {
        return <Layout style={{height:'100%'}}>
            <Sider
                breakpoint="md"
                trigger={null}
                collapsible="true"
                collapsed={this.state.collapsed}
            >
                <div className="logo" />
                <MyMenu collapsed={this.state.collapsed} />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        style={{marginLeft:"15px",fontSize:"16px"}}
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle.bind(this)}
                    />
                </Header>
                <Content style={{ padding:'0 15px'}}>
                    <Main />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    }
}

