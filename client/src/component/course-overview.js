import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import GroupContent from './group-content';
import Lesson from './course-content';
import Statics from './course-statics';
import Settings from './course-settings';

class Overview extends React.Component {

    render() {
        let courses = this.props.coursesManager;
        if (this.props.match.params.type === '1') {
            courses = this.props.coursesLeaner;
        }
        return (
            <div className="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header headername='Over View'></Header>
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href='#overview' role="tab" aria-controls="overview">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#content" role="tab"
                                aria-controls="content">Course Contents</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#statics" role="tab" aria-controls="statics">Statics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#settings" role="tab" aria-controls="settings">Settings</a>
                        </li>
                    </ul>
                    <div className="tab-content m-t-20">
                        <div className="tab-pane active" id="overview" role="tabpanel">
                            <GroupContent groupname="Title" groupcontent={courses[this.props.match.params.id].title}></GroupContent>
                            <GroupContent groupname="Description" groupcontent={courses[this.props.match.params.id].description}></GroupContent>
                        </div>
                        <div className="tab-pane" id="content" role="tabpanel"><Lesson></Lesson></div>
                        <div className="tab-pane" id="statics" role="tabpanel"><Statics></Statics></div>
                        <div className="tab-pane" id="settings" role="tabpanel">
                            <Settings coursename={courses[this.props.match.params.id].title}
                                coursedescription={courses[this.props.match.params.id].description}
                                onGeneralSettingsSubmit={this.props.onGeneralSettingsSubmit}
                                coursenameChangeHandle={this.props.coursenameChangeHandle}
                                coursedescriptionChangeHandle={this.props.coursedescriptionChangeHandle}
                                idcourse={courses[this.props.match.params.id].idCourse}
                                idManageCourse={courses[this.props.match.params.id].idManageCourse}>
                            </Settings>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;