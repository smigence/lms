import React from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar" data-background-color="white" data-active-color="danger">

                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/homepage" className="simple-text">
                            Learning Management System
                        </Link>
                    </div>

                    <ul className="nav">
                        <li className="active">
                            <Link to="/homepage">
                                <i className="ti-panel"></i>
                                <p>My Course</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/homepage">
                                <i className="ti-user"></i>
                                <p>Management Course</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/homepage">
                                <i className="ti-view-list-alt"></i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
