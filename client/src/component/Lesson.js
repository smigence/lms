import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './LessonHeader';
import GroupContent from './lesson-groupcontent';


class Lesson extends React.Component {
    render() {
        const no = '01'
        const groupname = 'Introduction ReactJS'

        return (
            <div div="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header></Header>
                    <BreadCrum></BreadCrum>
                    <div className="content thumbnails">
                        <GroupContent groupname={groupname} no={no}></GroupContent>
                        <GroupContent groupname={groupname} no={no}></GroupContent>
                        <GroupContent groupname={groupname} no={no}></GroupContent>
                        <GroupContent groupname={groupname} no={no}></GroupContent>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lesson