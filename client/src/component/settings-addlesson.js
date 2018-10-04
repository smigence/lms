import React from 'react';
import ReactDOM from 'react-dom';
import AutoRedirect from './Redirect';
import Sidebar from './SideBar';
import Header from './Header';
import AddLesson from './settings-lesson';
import AddStudent from './settings-student';

class AddLessonContent extends React.Component {
    render() {

        if (this.props.account === "") ReactDOM.render(<AutoRedirect mode={0} />, document.getElementById('root'));
        return (
            <div className="wrapper">
                <Sidebar></Sidebar>
                <div className="main-panel" >
                    <Header headername='Settings'></Header>
                    <div className="thumbnails">
                        <div className="col-sm-12 col-xl-6 m-t-20">
                            <div className="card">
                                <div className="card-header">
                                    <i className="fa fa-align-justify"></i> Settings Group
                                        <div className="card-header-actions">
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="col-md-6 mb-4">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="general" role="tabpanel">
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <strong>Add</strong> Lesson</div>
                                                        <div className="card-body">
                                                            <form className="form-horizontal" method="post" encType="multipart/form-data">
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="text-input">Lesson Name: </label>
                                                                    <div className="col-md-9">
                                                                        <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Text" />
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="textarea-input">Lesson Description: </label>
                                                                    <div className="col-md-9">
                                                                        <textarea className="form-control" id="textarea-input" name="textarea-input" rows={9} placeholder="Content.." defaultValue={""} />
                                                                    </div>
                                                                </div>

                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="file-input">File upload: </label>
                                                                    <div className="col-md-9">
                                                                        <input id="file-input" type="file" name="file-input" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="file-multiple-input">Multiple File input</label>
                                                                    <div className="col-md-9">
                                                                        <input id="file-multiple-input" type="file" name="file-multiple-input" multiple />
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
                                            <div className="tab-pane" id="lesson" role="tabpanel"><AddLesson></AddLesson></div>
                                            <div className="tab-pane" id="student" role="tabpanel"><AddStudent></AddStudent></div>
                                        </div>
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

export default AddLessonContent;
