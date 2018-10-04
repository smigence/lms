import React from 'react';
import ReactDOM from 'react-dom';
import AutoRedirect from './Redirect';
import Sidebar from './SideBar';
import Course from './Course';
import Header from './Header';
import AsyncCp from './AsyncCp';
import { BrowserRouter,Route } from 'react-router-dom';


class ManagementCourse extends React.Component {
  render() {
    const hrefLink = 'https://youtu.be/s6zR2T9vn2c';
    const imageLink = 'images/pic01.jpg';
    const nameCourse = 'Nascetur nunc varius commodo';
    const description = 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.';

    if (this.props.account==="") ReactDOM.render(<AutoRedirect mode={0}/>,document.getElementById('root'));
    return (
       <div className="wrapper">
        <Sidebar preloca={this.props.location.pathname}></Sidebar>
        <div className="main-panel" >
          <Header headername='Management Course'></Header>
          <div className="thumbnails">
          {this.props.courses.length?this.props.courses.map((course,index) => 
                <Course key = {index} hrefLink={hrefLink}  course={course} imageLink={imageLink}  index={index}></Course>)
                :<div className="login102-form-title p-b-34 m-b-20">You have no course</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default ManagementCourse;
