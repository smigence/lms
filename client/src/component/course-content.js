import React from 'react';
import GroupContent from './lesson-groupcontent';

class Lesson extends React.Component {
    render() {
        let id_lesson = this.props.lessons[0].idLesson;
        let files = [];
        let no_lesson = 1;
        return (
            <div className="content thumbnails">
                {this.props.lessons.map((lesson, index) => {

                    if (lesson.idLesson === id_lesson) {
                        files.push(lesson);
                    }
                    else {
                        <GroupContent key={index} groupname={files[0].description} no={no_lesson} files={files}></GroupContent>
                        files = [];
                        files.push(lesson);
                        no_lesson++;
                        id_lesson = lesson.idLesson;
                    }
                })
                }
                <GroupContent groupname={files[0].description} no={no_lesson} files={files}></GroupContent>
            </div>
        );
    }
}
export default Lesson;
//<a key={index} href={file.link}><li className="list-group-item">{file.name}</li></a>