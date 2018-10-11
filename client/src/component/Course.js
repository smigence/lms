import React from 'react';
import { Link } from 'react-router-dom';

class Course extends React.Component {

    constructor(props) {
        super(props);
        this.onCourseClick = this.onCourseClick.bind(this);
    }

    onCourseClick() {
        this.props.onCourseClick(this.props.course.idLearnerCourse);
    }
    render() {
        let type=0;
        if (this.props.course.idManage===undefined) type=1;
        return (
            <div className="box12">
                <Link to={'/overview/'+this.props.index+"/"+type} className="image fit"><img src={this.props.imageLink} alt="" onClick={this.onCourseClick} /></Link>
                <div className="inner">
                    <h3><Link to={'/overview/'+this.props.index+"/"+type}><div onClick={this.onCourseClick}>{this.props.course.title}</div></Link></h3>
                    <p>{this.props.course.description}</p>
                </div>
                <Link to={'/overview/'+this.props.index+"/"+type} className="button"><div onClick={this.onCourseClick}>Watch</div></Link>
            </div>
        );
    }
}

export default Course;
