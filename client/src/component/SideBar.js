import React from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        let selectMyCourse = '';
        let selectManagementCourse = '';
        if(this.props.preloca === '/'){
            selectMyCourse = 'active';
        } else if (this.props.preloca === '/management-course'){
            selectManagementCourse = 'active'; 
        }
    
        return (
            <div className="sidebar" data-background-color="white" data-active-color="danger">

                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/" className="simple-text">
                            Learning Management System
                        </Link>
                    </div>

                    <ul className="nav">
                        <li className={selectMyCourse}>
                            <Link to="/">
                                <i className="ti-panel"></i>
                                <p>My Course</p>
                            </Link>
                        </li>
                        <li className={selectManagementCourse}>
                            <Link to="/management-course">
                                <i className="ti-user"></i>
                                <p>Management Course</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
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
