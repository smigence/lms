import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './mycourse-header';
import Element from './statics-viewmore-element';
import Chart from './statics-viewmore-chart';

class Viewmore extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar></Sidebar>
        <div className="main-panel" >
          <Header></Header>
          <BreadCrum></BreadCrum>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header">
                  <i className="fa fa-align-justify"></i>Student Infromation
                  <div className="card-header-actions"></div>
                </div>
                <div className="card-body">
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                  <Element formname='User Name: ' formdata='Nguyen Van A'></Element>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header">
                  <i className="fa fa-align-justify"></i> Chart Statics
                  <div className="card-header-actions"></div>
                </div>
                <div className="card-body">
                  <div className="chart-wrapper">
                    <Chart></Chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewmore;
