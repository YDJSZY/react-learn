/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
const ReactDom = require("react-dom");
const Page_a = require("../view_components/page_a");
const Page_b = require("../view_components/page_b");
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
module.exports = ReactDom.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Page_a}></Route>
            <Route path="page_a" component={Page_a}></Route>
            <Route path="page_b" component={Page_b}></Route>
        </Router>
    ),
    document.getElementById('main')
);