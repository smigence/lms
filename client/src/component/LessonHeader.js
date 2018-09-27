import React from 'react';

class BreadCrum extends React.Component {
    render(){
        return (
            <header className="app-header navbar">
      
      <ul className="nav navbar-nav d-md-down-none">
        <li className="nav-item px-3">
          <a className="nav-link1" href="#">Over View</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link1" href="#">Lesson</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link1" href="#">Statics</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link1" href="#">Settings</a>
        </li>
      </ul>
      
    </header>
        );
    }
}

export default BreadCrum;