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
    const nameCourse = 'Nascetur nunc varius commodo';
    const description = 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.';

    if (this.props.account==="") ReactDOM.render(<AutoRedirect mode={0}/>,document.getElementById('root'));
    return (
       <div className="wrapper">
        <Sidebar preloca={this.props.location.pathname}></Sidebar>
        <div className="main-panel" >
          <Header headername='My Course'></Header>
          <div className="thumbnails">
            <Course hrefLink={hrefLink} nameCourse={nameCourse} imageLink={imageLink} description={description}></Course>

            <Course hrefLink={hrefLink} nameCourse={nameCourse} imageLink={imageLink} description={description}></Course>

            <Course hrefLink={hrefLink} nameCourse={nameCourse} imageLink={imageLink} description={description}></Course>

            <Course hrefLink={hrefLink} nameCourse={nameCourse} imageLink={imageLink} description={description}></Course>

            <Course hrefLink={hrefLink} nameCourse={nameCourse} imageLink={imageLink} description={description}></Course>

            <Course hrefLink={hrefLink} nameCourse={nameCourse} imageLink={imageLink} description={description}></Course>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
