import React from 'react';
import Element from './settings-element-addstudent';
import Pagination from './pagination';

class AddStudent extends React.Component {
    render(){
        const No = '01.';
        const Email = 'test1234@kis-v.com.vn';
        const Student = 'Nascetur nunc varius commodo';
        const Progress = '40%';


        return(
            <div className="col-sm-12 col-xl-6">
                <div className="col-sm-12 col-xl-6">
                    <div className="card">
                        <table className="table table-striped table-bordered datatable dataTable no-footer">
                            <thead className="thead-dark">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Select</th>
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
                        <div className="card-footer">
                        <button className="btn btn-sm btn-primary" type="submit">
                            <i className="fa fa-dot-circle-o" />Save Changes</button>
                    </div>
                    </div>
                    <Pagination></Pagination><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            </div>
        );
    }
}

export default AddStudent;