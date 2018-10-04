import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import BreadCrum from './managementcourse-header';
import Element from './statics-element-addstudent';
import Pagination from './pagination';


class Statics extends React.Component {


  render() {
    const No = '01.';
    const Email = 'test1234@kis-v.com.vn';
    const Student = 'Nascetur nunc varius commodo';
    const Progress = '40%';

    return (
      <div className="content">
        <div className="col-sm-12 col-xl-6">
          <table className="table table-responsive-sm table-outline mb-0">
            <thead className="thead-dark">
              <tr>
                <th>No.</th>
                <th>Email</th>
                <th >Student</th>
                <th>Progress</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
              <Element No={No} Email={Email} Student={Student} Progress={Progress} ></Element>
            </tbody>
          </table>
          <Pagination></Pagination>
        </div>
      </div>
    );
  }
}

export default Statics;