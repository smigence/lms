import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './LessonHeader';


class Lesson extends React.Component {
    render() {
        return (
            <div div="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header></Header>
                    <BreadCrum></BreadCrum>
                    <div className="content thumbnails">
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <i className="fa fa-align-justify"></i> List group
                                        <div className="card-header-actions">
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">Lesson 1: Lul</li></a>
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">card-header-actions</li></a>
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">content thumbnails</li></a>
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">fa fa-align-justify</li></a>
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">Cras justo odio</li></a>
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">Cras justo odio</li></a>
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">Cras justo odio</li></a>
                                        <a href="https://youtu.be/s6zR2T9vn2c"><li className="list-group-item">Cras justo odio</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lesson