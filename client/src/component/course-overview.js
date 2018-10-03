import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum0 from './managementcourse-header';
import BreadCrum1 from './mycourse-header';
import GroupContent from './group-content';

class Overview extends React.Component {
<<<<<<< HEAD
    componentDidMount() {
        console.log(this.props.history);
    }
    render() {
        let courses = this.props.coursesLeaner;
        if (this.props.match.params==='management-course') courses=this.props.coursesManager;
=======

    render() {
        let courses = this.props.coursesManager;
        let BreadCrum = BreadCrum0;
        if(this.props.match.params.type==='1') {
            courses = this.props.coursesLeaner;
            BreadCrum = BreadCrum1;
        }
>>>>>>> api_homepage
        return (
            <div className="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header headername='Over View'></Header>
<<<<<<< HEAD
                    <BreadCrum id={this.props.match.params.id}></BreadCrum>
=======
                    <BreadCrum id={this.props.match.params.id} type={this.props.match.params.type}></BreadCrum>
>>>>>>> api_homepage
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