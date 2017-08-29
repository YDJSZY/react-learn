/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
const ReactDom = require("react-dom");
const Page_a = require("../view_components/page_a");
const Page_b = require("../view_components/page_b");
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Main extends React.Component {
    render() {
        return <Switch>
                    <Route exact path="/" component={Page_a}></Route>
                    <Route path="/page_a" component={Page_a}></Route>
                    <Route path="/page_b" component={Page_b}></Route>
                </Switch>

    }
}