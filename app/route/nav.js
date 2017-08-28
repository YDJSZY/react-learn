/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
const ReactDom = require("react-dom");
import { BrowserRouter as StaticRouter, Router, Switch, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
const Nav = React.createClass({
    render: function () {
        return <Router history={customHistory}>
                 <ul className="sidebar-menu">
                    <li>
                        <Link to="/page_a">
                            <i className="fa fa-user"></i>
                            page_a
                        </Link>
                    </li>
                    <li>
                        <Link to="/page_b">
                            <i className="fa fa-table"></i>
                            page_b
                        </Link>
                    </li>
                </ul>
            </Router>
    }
});
ReactDom.render(<Nav />,document.getElementById("menu"));
module.exports = Nav;