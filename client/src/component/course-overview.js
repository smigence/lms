import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './LessonHeader';


class Overview extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header></Header>
                    <BreadCrum></BreadCrum>
                    <div className="content thumbnails">
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">About Course</div>
                                <div className="card-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">Card title</div>
                                <div className="card-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">Card title</div>
                                <div className="card-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;