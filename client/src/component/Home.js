import React from 'react';
import Sidebar from './SideBar';
import Course from './Course';
import Header from './Header';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    
  }

    render() {
      const hrefLink = 'https://youtu.be/s6zR2T9vn2c';
      const imageLink = 'images/pic01.jpg';
      const nameCourse = 'Nascetur nunc varius commodo';
      const description = 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.';

      return (
        <div className="wrapper">
          <Sidebar></Sidebar>
					<div className="main-panel" >
            <Header></Header>
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
