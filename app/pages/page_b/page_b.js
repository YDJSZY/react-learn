/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
import Breadcrumb from 'antd/lib/breadcrumb';
import 'antd/lib/breadcrumb/style/index.css';
import { model,action } from '../page_a/model';
import DateRange from '../../components/dateRange';
//import SelectComponent from '../../components/select';
import axios from 'axios';
import CommonMethodsClass from '../../untils/commonMethods';
export default class Page_b extends CommonMethodsClass{
    constructor(props) {
        super(props);
    }
    
    render () {
        return  <div>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>page_b</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: '0 15px 15px 15px', background: '#fff'}}>
                        <span className="test">this is page_b</span>
                    </div>
                </div>
    }
};