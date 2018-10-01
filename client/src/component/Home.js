import React from 'react';
import ReactDOM from 'react-dom';
import AutoRedirect from './Redirect';
import Sidebar from './SideBar';
import Course from './Course';
import Header from './Header';

class Homepage extends React.Component {

  render() {
    const hrefLink = 'https://youtu.be/s6zR2T9vn2c';
    const imageLink = 'images/pic01.jpg';

    if (this.props.account==="") ReactDOM.render(<AutoRedirect mode={0}/>,document.getElementById('root'));
    return (
       <div className="wrapper">
        <Sidebar preloca={this.props.location.pathname}></Sidebar>
        <div className="main-panel" >
          <Header headername='My Course'></Header>
          <div className="thumbnails">
            {this.props.courses.length?this.props.courses.map((course,index) => 
                <Course key = {index} hrefLink={hrefLink} title={course.title} imageLink={imageLink} description={course.description}></Course>)
                :<div className="login100-form-title p-b-34 m-b-20">You have no course</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
