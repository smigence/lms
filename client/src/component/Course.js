import React from 'react';
import { BrowserRouter,Link,Route } from 'react-router-dom';
import AsyncCp from './AsyncCp';

class Course extends React.Component {

    render() {
        let type=0;
        console.log(this.props.course);
        if (this.props.course.idManage===undefined) type=1;
        return (
            <div className="box12">
                <Link to={'/overview/'+this.props.index+"/"+type} className="image fit"><img src={this.props.imageLink} alt="" /></Link>
                <div className="inner">
                    <h3><Link to={'/overview/'+this.props.index+"/"+type}>{this.props.course.title}</Link></h3>
                    <p>{this.props.course.description}</p>
                </div>
                <Link to={'/overview/'+this.props.index+"/"+type} className="button big">Watch</Link>
            </div>
        );
    }
}

export default Course;
