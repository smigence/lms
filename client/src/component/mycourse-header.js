import React from 'react';
import { Link } from 'react-router-dom';

class BreadCrum extends React.Component {
    render() {
        return (
            <header className="app-header navbar">

                <ul className="nav navbar-nav d-md-down-none">
                    <li className="nav-item px-3">
                        <Link to={'/overview/'+this.props.id+'/'+this.props.type}>Over View</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link to='/list-lesson'>Course Content</Link>
                    </li>
                </ul>

            </header>
        );
    }
}

export default BreadCrum;