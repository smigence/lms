import React from 'react';
import { BrowserRouter,Link,Route } from 'react-router-dom';
import AsyncCp from './AsyncCp';

class Course extends React.Component {

    render() {

        return (
            <div className="box12">
                <Link to={'/overview/'+this.props.index} className="image fit"><img src={this.props.imageLink} alt="" /></Link>
                <div className="inner">
                    <h3><Link to={'/overview/'+this.props.index}>{this.props.title}</Link></h3>
                    <p>{this.props.description}</p>
                </div>
                <Link to={'/overview/'+this.props.index} className="button big">Watch</Link>
            </div>
        );
    }
}

export default Course;
