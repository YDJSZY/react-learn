/**
 * Created by luwenwei on 17/8/29.
 */
import Nav from '../route/nav';
import Main from '../route/routes';
const React = require("react");
export default class App extends React.Component {
    render() {
        return <div>
                    <header className="main-header">
                        <a href="index2.html" className="logo">
                            <span className="logo-mini"><b>A</b>LT</span>
                            <span className="logo-lg"><b>Admin</b>LTE</span>
                        </a>
                        <nav className="navbar navbar-static-top">
                            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                        </nav>
                    </header>
                    <aside className="main-sidebar">
                        <section className="sidebar">
                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src="../../app/images/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p>Alexander Pierce</p>
                                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                                </div>
                            </div>
                            <form action="#" method="get" className="sidebar-form">
                                <div className="input-group">
                                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                      <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                        </button>
                      </span>
                                </div>
                            </form>
                            <div id="menu">
                                <Nav />
                            </div>
                        </section>
                    </aside>
                    <div className="content-wrapper">
                        <section className="content" id="main">
                            <Main />
                        </section>
                    </div>
                    <footer className="main-footer">
                        <div className="pull-right hidden-xs">
                            <b>Version</b> 2.3.8
                        </div>
                        <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
                        reserved.
                    </footer>
                </div>
    }

}

