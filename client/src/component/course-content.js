import React from 'react';
import GroupContent from './lesson-groupcontent';


class Lesson extends React.Component {
    render() {
        const no = '01'
        const groupname = 'Introduction ReactJS'

        return (

            <div className="content thumbnails">
                <GroupContent groupname={groupname} no={no}></GroupContent>
                <GroupContent groupname={groupname} no={no}></GroupContent>
                <GroupContent groupname={groupname} no={no}></GroupContent>
                <GroupContent groupname={groupname} no={no}></GroupContent>
            </div>

        );
    }
}

export default Lesson