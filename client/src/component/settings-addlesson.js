import React from 'react';
import ReactDOM from 'react-dom';
import AutoRedirect from './Redirect';
import Sidebar from './SideBar';
import Header from './Header';
import AddLesson from './settings-lesson';
import AddStudent from './settings-student';



class AddLessonContent extends React.Component {
    onAddLessonSubmitClick = (eve) => {
        this.props.onAddLessonSubmitClick(eve, this.props.match.params.id);
    }

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
                                                                    <label className="col-md-3 col-form-label" htmlFor="textarea-input">Lesson Description: </label>
                                                                    <div className="col-md-9">
                                                                        <textarea className="form-control" id="textarea-input" name="textarea-input"
                                                                            rows={9} placeholder="Content.." defaultValue={""} onChange={this.props.lessonDescriptionChangeHandle} />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-md-3 col-form-label" htmlFor="file-input">File upload: </label>
                                                                    <div className="col-md-9">
                                                                        <input id="file-input" type="file" name="file-input" onChange={this.props.fileChangeHandle} />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button className="btn btn-sm btn-primary" type="submit"
                                                                onClick={this.onAddLessonSubmitClick}>
                                                                <i className="fa fa-dot-circle-o" /> Submit</button>
                                                            <button className="btn btn-sm btn-danger" type="reset">
                                                                <i className="fa fa-ban" /> Reset</button>
                                                            <i className={this.props.uploadResult}></i>
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
