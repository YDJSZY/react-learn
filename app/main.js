/**
 * Created by luwenwei on 17/2/5.
 */
import React from 'react';
import ReactDom from 'react-dom';
//import { HashRouter } from 'react-router-dom';
import { HashRouter, Route } from 'react-keeper'
import axios from 'axios';
import App from './app';
import {myInfo,constants,setMyInfo,setConstants} from './untils/global'
require("./styles/main.css");
require("./styles/someReset.css");
require("./untils/toggle");
async function getMyInfo() {
    var response = await axios.get('../package.json');
    setMyInfo(response.data);
}
getMyInfo();
ReactDom.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));
