/**
 * Created by Apple on 17/2/6.
 */
const React = require("react");
const ReactDom = require("react-dom");
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
const Nav = React.createClass({
    render: function () {
        return <ul className="sidebar-menu">
                    <li>
                        <a href="#page_a">
                            <i className="fa fa-ellipsis-v"></i>
                            page_a
                        </a>
                    </li>
                    <li>
                        <a href="#page_b">
                            <i className="fa fa-table"></i>
                            page_b
                        </a>
                    </li>
                </ul>
    }
});
ReactDom.render(<Nav />,document.getElementById("menu"));
module.exports = Nav;