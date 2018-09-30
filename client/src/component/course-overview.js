import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './LessonHeader';
import GroupContent from './group-content';


class Overview extends React.Component {
    render() {
        const groupname = 'About Course';
        const groupcontent = 'The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.';

        return (
            <div className="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header></Header>
                    <BreadCrum></BreadCrum>
                    <div className="content thumbnails">
                        <GroupContent groupname={groupname} groupcontent={groupcontent}></GroupContent>
                        <GroupContent groupname={groupname} groupcontent={groupcontent}></GroupContent>
                        <GroupContent groupname={groupname} groupcontent={groupcontent}></GroupContent>
                        <GroupContent groupname={groupname} groupcontent={groupcontent}></GroupContent>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;