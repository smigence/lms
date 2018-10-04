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
                                <label className="col-md-3 col-form-label" htmlFor="text-input">Couse Name:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="text-input" type="text" name="text-input" placeholder="Text" defaultValue={this.props.coursename} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 col-form-label" htmlFor="textarea-input">Course's description: </label>
                                <div className="col-md-9">
                                    <textarea className="form-control" id="textarea-input" name="textarea-input" rows={9} placeholder="Content.." defaultValue={this.props.coursedescription} />
                                </div>
                            </div>
                            <label className="col-md-3 col-form-label" htmlFor="file-input">Course's image: </label>
                            <div className="col-md-9">
                                <input id="file-input" type="file" name="file-input" 
                                onChange={this.props.onFileChange}/>
                                <button  onClick={this.props.uploadClick} className="btn btn-sm btn-primary" type="submit">Upload</button>
                                <i className={this.props.uploadResult}/>
                            </div>

                        </form>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-sm btn-primary" type="submit" onClick={this.props.onGeneralSettingsSubmit}>
                            <i className="fa fa-dot-circle-o" /> Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default General;