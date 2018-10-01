import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"></span>
                            <span className="icon-bar bar2"></span>
                            <span className="icon-bar bar3"></span>
                        </button>
                        <a className="navbar-brand" href="">{this.props.headername}</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">

                            <li className="dropdown">
                                <a href="" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-bell"></i>
                                    <p className="notification">5</p>
                                    <p>Notifications</p>
                                    <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="">Notification 1</a></li>
                                    <li><a href="">Notification 2</a></li>
                                    <li><a href="">Notification 3</a></li>
                                    <li><a href="">Notification 4</a></li>
                                    <li><a href="">Another notification</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="ti-settings"></i>
                                    <p>Log Out</p>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;