import React from 'react';

class General extends React.Component {
    onGeneralSettingsSubmit = (e) => {
        this.props.onGeneralSettingsSubmit(e, this.props.idcourse , this.props.coursename, this.props.coursedescription);
    }

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
                                    <input className="form-control" type="text"
                                        placeholder="Text" defaultValue={this.props.coursename}
                                        onChange={this.props.coursenameChangeHandle} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 col-form-label" htmlFor="textarea-input">Course's description: </label>
                                <div className="col-md-9">
                                    <textarea className="form-control" rows={9} placeholder="Content.."
                                        onChange={this.props.coursedescriptionChangeHandle}
                                        defaultValue={this.props.coursedescription} />
                                </div>
                            </div>
                            {/* <label className="col-md-3 col-form-label" htmlFor="file-input">Course's image: </label>
                            <div className="col-md-9">
                                <input id="file-input" type="file" name="file-input" 
                                onChange={this.props.onFileChange}/>
                                <button  onClick={this.props.uploadClick} className="btn btn-sm btn-primary" type="submit">Upload</button>
                                <i className={this.props.uploadResult}/>
                            </div> */}
                            <div className="card-footer">
                                <button className="btn btn-sm btn-primary" type="submit" onClick={this.onGeneralSettingsSubmit}>
                                    <i className="fa fa-dot-circle-o" /> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default General;