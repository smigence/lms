import React from 'react';
import { Link } from 'react-router-dom';

class Course extends React.Component {

    render() {

        return (
            <div className="box12">
                <Link to='/overview' className="image fit"><img src={this.props.imageLink} alt="" /></Link>
                <div className="inner">
                    <h3><Link to='/overview'>{this.props.nameCourse}</Link></h3>
                    <p>{this.props.description}</p>
                </div>
                <Link to='/overview' className="button big">Watch</Link>
            </div>
        );
    }
}

export default Course;
