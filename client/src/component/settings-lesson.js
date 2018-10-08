import React from 'react';
import Element from './settings-element-addlesson';
import Pagination from './pagination';
import { Link } from 'react-router-dom';


class AddLesson extends React.Component {

    render() {

        const No = '01.';
        const Email = 'test1234@kis-v.com.vn';
        const Student = 'Nascetur nunc varius commodo';
        const Progress = '40%';
        return (
            <div className="col-sm-12 col-xl-6 m-t-20">
                <div className="col-sm-12 col-xl-6">
                    <div className="card">
                        <table className="table table-striped table-bordered datatable dataTable no-footer">
                            <thead className="thead-dark">
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Lenght</th>
                                    <th>Link Video</th>
                                    <th>Edit</th>
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

                            <Link to={'/addlesson/' + this.props.idManageCourse} className="btn btn-sm btn-primary">
                                <i className="fa fa-dot-circle-o" />Add Lesson</Link>
                        </div>
                    </div>
                    <Pagination></Pagination><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <strong>Add Test Content</strong> Answer and question</div>
                        <div className="card-body">
                            <form className="form-horizontal" method="post" encType="multipart/form-data">

                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label" htmlFor="select1">Select</label>
                                    <div className="col-md-9">
                                        <select className="form-control" id="select1" name="select1">
                                            <option value={0}>Please select</option>
                                            <option value={1}>Option #1</option>
                                            <option value={2}>Option #2</option>
                                            <option value={3}>Option #3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label" htmlFor="textarea-input">Textarea</label>
                                    <div className="col-md-9">
                                        <textarea className="form-control" id="textarea-input" name="textarea-input" rows={9} placeholder="Content.." defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label" htmlFor="text-input">Answer A:</label>
                                    <div className="col-md-9">
                                        <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Answer A" />

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label" htmlFor="text-input">Answer B:</label>
                                    <div className="col-md-9">
                                        <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Answer B" />

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label" htmlFor="text-input">Answer C:</label>
                                    <div className="col-md-9">
                                        <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Answer C" />

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label" htmlFor="text-input">Answer D:</label>
                                    <div className="col-md-9">
                                        <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Answer D" />

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label" htmlFor="select1">Select Right Answer</label>
                                    <div className="col-md-9">
                                        <select className="form-control" id="select1" name="select1">
                                            <option value={0}>Please select</option>
                                            <option value={1}>Option #1</option>
                                            <option value={2}>Option #2</option>
                                            <option value={3}>Option #3</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-sm btn-primary" type="submit">
                                <i className="fa fa-dot-circle-o" /> Submit</button>
                            <button className="btn btn-sm btn-danger" type="reset">
                                <i className="fa fa-ban" /> Reset</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddLesson;