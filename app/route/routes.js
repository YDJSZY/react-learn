/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
const ReactDom = require("react-dom");
const Page_a = require("../view_components/page_a");
const Page_b = require("../view_components/page_b");
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
module.exports = ReactDom.render(
    (
        <Router>
           
        </Router>
    ),
    document.getElementById('main')
);