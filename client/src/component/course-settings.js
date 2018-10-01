import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './managementcourse-header';
import General from './settings-general';
import AddLesson from './settings-lesson';
import AddStudent from './settings-student';


class Settings extends React.Component {
    render() {
        return (
            <div div="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header headername='Settings'></Header>
                    <BreadCrum></BreadCrum>
                    <div className="content thumbnails">
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <i className="fa fa-align-justify"></i> Settings Group
                                        <div className="card-header-actions">
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="col-md-6 mb-4">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">

                                                <a className="nav-link active" data-toggle="tab" href='#general' role="tab" aria-controls="general">General</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#lesson" role="tab" aria-controls="lesson">Lesson</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#student" role="tab" aria-controls="student">Student</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#messages" role="tab" aria-controls="messages">Document</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="general" role="tabpanel"><General></General></div>
                                            <div className="tab-pane" id="lesson" role="tabpanel"><AddLesson></AddLesson></div>
                                            <div className="tab-pane" id="student" role="tabpanel"><AddStudent></AddStudent></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;