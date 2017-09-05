/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
import { Breadcrumb } from 'antd';
//import DateRange from '../../components/dateRange';
//import SelectComponent from '../../components/select';
//import axios from 'axios';
export default class Page_b extends React.Component{
    render () {
        return  <div>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>page_b</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: '0 15px 15px 15px', background: '#fff'}}>

                    </div>
                </div>
    }
};