/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
const ReactDom = require("react-dom");
import { BrowserRouter as StaticRouter, Router, Switch, Route, Link,NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
export default class Nav extends React.Component {
    render() {
        return <nav>
                    <ul>
                        <li>
                            <NavLink to="/page_a">
                                <i className="fa fa-user"></i>
                                page_a
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/page_b">
                                <i className="fa fa-table"></i>
                                page_b
                            </NavLink>
                        </li>
                    </ul>
                </nav>
    }
};
/*
ReactDom.render(<Nav />,document.getElementById("menu"));
module.exports = Nav;*/
