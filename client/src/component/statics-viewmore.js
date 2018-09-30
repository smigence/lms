import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import GroupContent from './viewmore-groupcontent';
import BreadCrum from './LessonHeader';

class Viewmore extends React.Component {
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
          <BreadCrum></BreadCrum>
            <div className="row">
              <GroupContent  groupname='Student Information'></GroupContent>
              <GroupContent groupcontent='11232'></GroupContent>
            </div>
        </div>
      </div>
    );
  }
}

export default Viewmore;
