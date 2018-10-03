import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './managementcourse-header';
import General from './settings-general';
import AddLesson from './settings-lesson';
import AddStudent from './settings-student';


class Settings extends React.Component {
    render() {

        const coursename = 'Introduction of ReactJS';
        const coursedescription = 'Yêu nước là gì? Nhà văn Ilia Erenbua có một ý văn thật sâu sắc: dòng suối chảy vào sông, con sông đổ vào biển lớn, tình yêu quê hương trở thành tình yêu đất nước. Vậy tình yêu nước đâu phải điều gì xa xôi. Yêu nước là yêu chính người thân trong gia đình mình, yêu bố mẹ; anh chị,... yêu cái cây trước cửa, yêu con đường đến trường... Lớp lớp, triệu triệu con người Việt Nam đã từng xả thân hi sinh để bảo vệ những người mình yêu quý, những vật mình thân quen; động lực chiến đấu của họ chính từ tình yêu đối với những gì bình dị nhất.'

        return (
            <div div="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header headername='Settings'></Header>
                    <BreadCrum></BreadCrum>
                    <div className="content thumbnails">
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <i className="fa fa-align-justify"></i> Settings Group
                                        <div className="card-header-actions">
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="col-md-6 mb-4">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">

                                                <a className="nav-link active" data-toggle="tab" href='#general' role="tab" aria-controls="general">General</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#lesson" role="tab" aria-controls="lesson">Lesson</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#student" role="tab" aria-controls="student">Student</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#messages" role="tab" aria-controls="messages">Document</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="general" role="tabpanel">
                                                <General coursename={coursename} coursedescription={coursedescription}
                                                onFileChange={this.props.onFileChange} uploadClick={this.props.uploadClick}uploadResult={this.props.uploadResult}></General>
                                            </div>
                                            <div className="tab-pane" id="lesson" role="tabpanel"><AddLesson></AddLesson></div>
                                            <div className="tab-pane" id="student" role="tabpanel"><AddStudent></AddStudent></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;