import React from 'react';

class General extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <strong>General</strong> Course</div>
                    <div className="card-body">
                        <form className="form-horizontal" method="post" encType="multipart/form-data">
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Static</label>
                                <div className="col-md-9">
                                    <p className="form-control-static">Username</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label" htmlFor="text-input">Text Input</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Text" />
                                    <span className="help-block">This is a help text</span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 col-form-label" htmlFor="textarea-input">Textarea</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" id="textarea-input" name="textarea-input" rows={9} placeholder="Content.." defaultValue={""} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 col-form-label" htmlFor="file-input">File input</label>
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
        );
    }
}

export default General;