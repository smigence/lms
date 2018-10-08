import React from 'react';
import { Link } from 'react-router-dom';


class Course extends React.Component {

    render() {
        let type=0;
        if (this.props.course.idManage===undefined) type=1;
        return (
            <div className="box12">
                <Link to={'/overview/'+this.props.index+"/"+type} className="image fit"><img src={this.props.imageLink} alt="" /></Link>
                <div className="">
                    <h3><Link to={'/overview/'+this.props.index+"/"+type}>{this.props.course.title}</Link></h3>
                    <p className="inner-box">{this.props.course.description.substr(0,100)}...</p>
                </div>
                <Link to={'/overview/'+this.props.index+"/"+type} className="button ">Watch</Link>
            </div>
        );
    }
}

export default Course;
