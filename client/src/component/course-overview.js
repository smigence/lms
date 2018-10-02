import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './managementcourse-header';
import GroupContent from './group-content';

class Overview extends React.Component {
    componentDidMount() {
        console.log(this.props.history);
    }
    render() {
        let courses = this.props.coursesLeaner;
        if (this.props.match.params==='management-course') courses=this.props.coursesManager;
        return (
            <div className="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header headername='Over View'></Header>
                    <BreadCrum id={this.props.match.params.id}></BreadCrum>
                    <div className="content thumbnails">
                        <GroupContent groupname="Title" groupcontent={courses[this.props.match.params.id].title}></GroupContent>
                        <GroupContent groupname="Description" groupcontent={courses[this.props.match.params.id].description}></GroupContent>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;