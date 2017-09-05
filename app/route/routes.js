/**
 * Created by Apple on 17/2/6.
 */
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from "react";
import Bundle from './bundle.js';
import page_a from 'bundle-loader?lazy&name=[name]!../pages/page_a/page_a.js';
import page_b from 'bundle-loader?lazy&name=[name]!../pages/page_b/page_b.js';
const Page_a = () => (
    <Bundle load={page_a}>
        {(Page_a) => <Page_a />}
    </Bundle>
)
const Page_b = () => (
    <Bundle load={page_b}>
        {(Page_b) => <Page_b />}
    </Bundle>
)

export default class Main extends React.Component {
    render() {
        return <Switch>
                    <Route exact path="/" component={Page_a}>
                    </Route>
                    <Route path="/page_a" component={Page_a}></Route>
                    <Route path="/page_b" component={Page_b}></Route>
                </Switch>

    }
}