/**
 * Created by Apple on 17/2/6.
 */
import  { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import React from "react";
import Bundle from './bundle.js';
import page_a from 'bundle-loader?lazy&name=[name]!../pages/page_a/page_a.js';
import page_b from 'bundle-loader?lazy&name=[name]!../pages/page_b/page_b.js';
import page_c from 'bundle-loader?lazy&name=[name]!../pages/page_c/page_c.js';
import { getLocalStorage } from '../untils/global';
const $localStorage = getLocalStorage();
const currentRoute = $localStorage.route;
const exactRoute = currentRoute || "page_a";
const Page_a = (match) => (
    <Bundle load={page_a}>
        {(Page_a) => <Page_a match={match}/>}
    </Bundle>
)
const Page_b = (match) => (
    <Bundle load={page_b}>
        {(Page_b) => <Page_b match={match}/>}
    </Bundle>
)
const Page_c = (match) => (
    <Bundle load={page_c}>
        {(Page_c) => <Page_c match={match}/>}
    </Bundle>
)

export default class Main extends React.Component {
    render() {
        return <Switch>
            <Route exact path="/" render={()=>{return <Redirect to={"/"+exactRoute+"/"} />}}></Route>
            <Route path="/page_a/" render={(match)=>{return Page_a(match)}}></Route>
            <Route path="/page_b/" render={(match)=>{return Page_b(match)}}></Route>
            <Route path="/page_c/" render={(match)=>{return Page_c(match)}}></Route>
        </Switch>

    }
}