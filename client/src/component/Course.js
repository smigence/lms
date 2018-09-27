import React from 'react';
import {Link} from 'react-router-dom';

class Course extends React.Component{
    constructor(){
        super();
        
    };
    render(){
        return(
            <div className="box">
					<Link to='list-lesson' className="image fit"><img src={this.props.imageLink} alt="" /></Link>
						<div className="inner">
						<h3><Link to='/list-lesson'>{this.props.nameCourse}</Link></h3>
						<p>{this.props.description}</p>
                        </div>
					<Link to='/list-lesson' className="button fit">Watch</Link>
			</div>
        );
    }
}

export default Course;
